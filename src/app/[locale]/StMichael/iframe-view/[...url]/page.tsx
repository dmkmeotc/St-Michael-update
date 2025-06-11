'use client';
import Loading from '@/app/loading';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function IframeAutoViewer() {
  const params = useParams();
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true when params change

    const urlSegments = params.url;
    let reconstructedUrl: string | null = null;

    if (Array.isArray(urlSegments) && urlSegments.length > 0) {
      reconstructedUrl = urlSegments.join('/');
      reconstructedUrl = decodeURIComponent(reconstructedUrl);
    } else if (typeof urlSegments === 'string') {
      reconstructedUrl = decodeURIComponent(urlSegments);
    }

    if (!reconstructedUrl) {
      setIframeUrl(null);
      setIsLoading(false); // No URL found, so not loading valid content
      return;
    }

    try {
      const validUrl = new URL(reconstructedUrl);
      setIframeUrl(validUrl.href);
    } catch (e) {
      console.error("Invalid URL:", reconstructedUrl, e);
      setIframeUrl(null);
    } finally {
      // Always set loading to false after processing, regardless of success or failure
      setIsLoading(false);
    }
  }, [params.url]);

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        {isLoading ? (
          <div className="flex items-center justify-center h-full ">
            <Loading/>
          </div>
        ) : iframeUrl ? (
          <iframe
            src={iframeUrl}
            className="w-full h-full border-none"
            title="Embedded Website"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-600 text-lg">
            Invalid or missing URL. Please provide a valid URL as part of the path (e.g., /viewer/https://example.com).
          </div>
        )}
      </div>
    </div>
  );
}