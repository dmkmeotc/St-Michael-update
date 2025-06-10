'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QRCodeCanvas } from "qrcode.react";
import { Sparkles } from "lucide-react"; // optional icon
import { cn } from "@/lib/utils"; // if you're using ShadCN's className helper

type QRCodeCardProps = {
  value: string;
  text: string;
};

export default function QRCodeCard({ value,text }: QRCodeCardProps) {
  return (
    <Card
      className={cn(
        "bg-gradient-to-br from-white to-slate-100 dark:from-zinc-900 dark:to-zinc-800",
        "rounded-2xl p-2 m-4 shadow-xl border border-gray-200 dark:border-zinc-700"
      )}
    >
      <CardHeader className="text-center ">
        <div className="flex items-center justify-center gap-2 text-primary">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <CardTitle className="text-lg font-semibold tracking-wide">{text}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="bg-white p-2 rounded-xl shadow-md">
          <QRCodeCanvas value={value} size={150} />
        </div>
      </CardContent>
    </Card>
  );
}
