// components/Tooltip.jsx
"use client";
import React, { useState } from "react";

export default function Tooltip({ children, text, position = "top" }) {
    const [visible, setVisible] = useState(false);

    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div
                    style={{ zIndex: 999 }}
                    className={`fixed whitespace-nowrap px-2 py-1 text-xs rounded-md text-white bg-gray-800/90 backdrop-blur-sm border border-gray-700 shadow-lg transition-all duration-150 ${positionClasses[position]}`}
                >
                    {text}
                    <div
                        style={{ zIndex: 999 }}
                        className={`fixed w-2 h-2 bg-gray-800/90 border-gray-700 rotate-45 ${position === "top"
                            ? "left-1/2 -translate-x-1/2 top-full border-l border-t"
                            : position === "bottom"
                                ? "left-1/2 -translate-x-1/2 bottom-full border-r border-b"
                                : position === "left"
                                    ? "top-1/2 -translate-y-1/2 left-full border-t border-l"
                                    : "top-1/2 -translate-y-1/2 right-full border-b border-r"
                            }`}
                    ></div>
                </div>
            )}
        </div>
    );
}
