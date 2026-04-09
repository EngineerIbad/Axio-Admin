"use client";
import { useState } from "react";
import Style from "./splash.module.css";

export default function SplashScreen() {
    const [countWords] = useState(["Developer", "that", "you", "can", "trust."]);

    return (
        <div className={Style.splash}>
            <h1 className={`font-geist ${Style.HeadersName}`}>
                {countWords.map((word, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.15}s`, color: word.includes("Developer") ? "#006045" : 'white' }}>
                        {word}&nbsp;
                    </span>
                ))}
            </h1>
        </div>
    );
}
