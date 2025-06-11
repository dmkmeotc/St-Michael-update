'use client';

import React from 'react';

interface IframeModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}

const IframeModal = ({ open, onClose, src, title }: IframeModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl w-11/12 max-w-5xl h-[85%] shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100">
          <span className="font-semibold text-gray-800 truncate">
            {title || `Viewing: ${src}`}
          </span>
          <button
            onClick={onClose}
            className="text-red-600 hover:text-red-800 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <iframe
          src={src}
          className="flex-grow w-full border-0"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

export default IframeModal;
