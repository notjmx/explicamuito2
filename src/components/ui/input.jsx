import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full p-2 rounded-md border border-gray-300 text-black ${className}`}
      {...props}
    />
  );
}
