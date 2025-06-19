'use client';

import {  CardTitle } from "@/components/ui/card";
import { QRCodeCanvas } from "qrcode.react";



type QRCodeCardProps = {
  value: string;
  text: string;
  size:number;
};

export default function QRCodeCard({ value,text,size }: QRCodeCardProps) {
  return (
     <div className="flex flex-col items-center justify-center space-y-2">
      
      
      
  <div className="flex items-center justify-center gap-2 text-primary text-white">
       {/*    <Sparkles className="w-5 h-5 animate-pulse" /> */}
          <CardTitle className="text-lg font-semibold tracking-wide">{text}</CardTitle>
        </div>

         <QRCodeCanvas value={value} size={size} />
     </div>
  );
}
