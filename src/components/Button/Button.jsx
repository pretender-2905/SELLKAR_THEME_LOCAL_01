
"use client";
import React from "react";

export default function AnimatedButton({
  text = "",
  bgColor = "",
  textColor = "",
  height = "h-11",
  padding = "",
  onlyBottomBorder = false,
  onClick,
  className = "",
  rounded = "",
  border,
  hoverBgColor = "",
  hoverTextColor = "",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    relative overflow-hidden inline-block group
    ${bgColor} ${textColor} ${height} ${padding} ${rounded} ${border} 
    ${disabled ? '' : `hover:${hoverBgColor} hover:${hoverTextColor}`}
    font-semibold text-sm uppercase tracking-widest
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center
    transition-colors duration-500
    ${disabled ? 'opacity-50' : ''}
    ${className}
  `}
      style={{

        "--hover-bg": hoverBgColor.replace("bg-", ""),
        "--hover-text": hoverTextColor.replace("text-", ""),
      }}
    >
      {/* Bottom border */}
      {onlyBottomBorder && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current"></span>
      )}




      <span className={`relative z-10 transition-transform duration-300 ease-in-out transform ${disabled ? '' : 'group-hover:-translate-y-full group-hover:opacity-0'}`}>
        {text}
      </span>


      <span className={`absolute inset-0 z-0 flex items-center justify-center transition-transform duration-300 ease-in-out transform ${disabled ? '' : 'translate-y-full group-hover:translate-y-0'}`}>
        {text}
      </span>
    </button>
  );
}

