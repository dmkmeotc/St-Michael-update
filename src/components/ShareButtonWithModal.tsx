'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Copy } from 'lucide-react';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const encode = encodeURIComponent;

const getFacebookShareUrl = (url: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encode(url)}`;

const getTwitterShareUrl = (url: string, title: string, text?: string, hashtags?: string[]) => {
  let tweet = `https://twitter.com/intent/tweet?url=${encode(url)}&text=${encode(title)}`;
  if (text) tweet += ` - ${encode(text)}`;
  if (hashtags?.length) tweet += `&hashtags=${encode(hashtags.join(','))}`;
  return tweet;
};

const getLinkedinShareUrl = (url: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encode(url)}`;

const getWhatsappShareUrl = (url: string, title: string, text?: string) => {
  let message = `${encode(title)}%0A${encode(url)}`;
  if (text) message += `%0A${encode(text)}`;
  return `https://wa.me/?text=${message}`;
};

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareData: {
    url: string;
    title: string;
    text?: string;
    hashtags?: string[];
  };
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, shareData }) => {
  const { url, title, text, hashtags } = shareData;

  const handleCopyUrl = useCallback(() => {
    try {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('URL copied to clipboard!');
      onClose();
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Copy failed. Try manually.');
    }
  }, [url, onClose]);

  const shareLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: getFacebookShareUrl(url) },
    { name: 'Twitter (X)', icon: <Twitter className="h-5 w-5" />, href: getTwitterShareUrl(url, title, text, hashtags) },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: getLinkedinShareUrl(url) },
    { name: 'WhatsApp', icon: <MessageCircle className="h-5 w-5" />, href: getWhatsappShareUrl(url, title, text) },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-sm p-6 rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-gray-800">
            Share This Page
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-3 mt-4">
          {shareLinks.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Share on ${name}`}
            >
              {icon}
              <span className="font-medium">{name}</span>
            </a>
          ))}

          <Button
            onClick={handleCopyUrl}
            className="flex items-center gap-3 mt-4 w-full justify-center"
            variant="outline"
            aria-label="Copy page URL"
          >
            <Copy className="h-5 w-5" />
            <span className="font-medium">Copy Link</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface ShareButtonWithModalProps {
  shareTitle: string;
  shareText?: string;
  shareHashtags?: string[];
  className?: string;
}

export default function ShareButtonWithModal({
  shareTitle,
  shareText,
  shareHashtags,
  className,
}: ShareButtonWithModalProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [canShare, setCanShare] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setCanShare(!!navigator.share);
    }
  }, []);

  const handleClick = useCallback(async () => {
    if (!currentUrl) return;

    if (canShare) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch (err) {
        console.warn('Share API fallback:', err);
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  }, [canShare, currentUrl, shareTitle, shareText]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={handleClick}
          className={clsx('flex items-center gap-2', className)}
          aria-label="Share this page"
          disabled={!currentUrl}
        >
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </Button>
      </DialogTrigger>
      <ShareModal
        isOpen={open}
        onClose={() => setOpen(false)}
        shareData={{ url: currentUrl, title: shareTitle, text: shareText, hashtags: shareHashtags }}
      />
    </Dialog>
  );
}
