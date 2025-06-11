"use client"

import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <Loader className="h-10 w-10 animate-spin text-ethYellow-400" />
        <p className="text-gray-600 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
