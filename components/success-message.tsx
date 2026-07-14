"use client";

import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  title: string;
  message: string;
  buttonText: string;
  onContinue: () => void;
}

export default function SuccessMessage({
  title,
  message,
  buttonText,
  onContinue,
}: SuccessMessageProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6">
      <div className="w-full max-w-md rounded-3xl border border-green-200 bg-white p-8 text-center shadow-2xl shadow-green-900/20">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <h2 className="mb-4 text-3xl font-semibold text-[#00418d]">{title}</h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-6 text-slate-600">
          {message}
        </p>

        <button
          onClick={onContinue}
          className="rounded-md bg-[#f73e5d] px-10 py-3 font-medium text-white transition-all hover:bg-[#d92f4d]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
