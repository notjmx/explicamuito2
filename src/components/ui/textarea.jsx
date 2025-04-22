import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full p-2 rounded-md border border-gray-300 text-black ${className}`}
      rows="4"
      {...props}
    />
  );
}
