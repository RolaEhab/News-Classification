import React from "react";

export const Button = ({ children, onClick, className, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
      disabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-indigo-600 text-white hover:bg-indigo-700"
    } ${className}`}
  >
    {children}
  </button>
);
