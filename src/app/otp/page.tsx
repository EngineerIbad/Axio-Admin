"use client";

import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import AuthHeader from "@/components/AuthHeader";
import AppButton from "@/components/AppButton";
import Divider from "@/components/Divider";
import OtpInput from "react-otp-input";

export default function OtpPage() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        router.push("/premium-access");
    };

    const handleRequestAccess = () => {
        router.push("/premium-access");
    };

    return (
        <div className="min-w-screen min-h-screen bg-[#141433] flex flex-col items-center justify-center p-6">

            <AuthHeader />

            <div className="relative flex flex-col items-center justify-center mb-[40px]">
                <div className="w-full max-w-[440px] min-w-[440px] bg-[#1b1b3a] border border-[#2a2a2a] rounded-2xl py-10 shadow-2xl space-y-5 mx-auto">
                    <div className="text-center mx-[54px] mb-[32px]">
                        <h1 className="text-white text-[24px] font-bold mb-[7px]">Enter 2FA Code</h1>
                        <p className="text-[14px] font-regular text-gray-400">
                            Enter the 6-digit code sent to your<br></br>registered device to continue.
                        </p>
                    </div>

                    {/* <div className="mx-[40px]"> */}
                    <OtpInput
                        value={otp}
                        onChange={(value) => {
                            setOtp(value);
                            setError("");
                        }}
                        numInputs={6}
                        shouldAutoFocus
                        inputType="tel"
                        containerStyle="flex justify-center gap-2"
                        renderInput={(props) => {
                            const isEmpty = !props.value;

                            return (
                                <div className="relative">
                                    <input
                                        {...props}
                                        className={`min-w-15 min-h-14 text-center rounded-md bg-black border-2 text-lg
          ${error ? "border-red-500" : "border-[#282E39]"}
          focus:outline-none focus:border-[#3B82F6]`}
                                    />

                                    {/* Dot Placeholder */}
                                    {isEmpty && (
                                        <span className="absolute inset-0 flex items-center justify-center text-white/40 pointer-events-none text-xl">
                                            •
                                        </span>
                                    )}
                                </div>
                            );
                        }}
                    />
                    {/* </div> */}

                    <div className="mx-[40px] my-[32px]">
                        <AppButton
                            onClick={handleLogin}
                            disabled={false}
                            cursor={(true) ? "pointer" : "not-allowed"}
                        >
                            Verify & Access
                        </AppButton>
                    </div>
                    <div className="mx-[40px]">
                        <Divider color="white" opacity={0.1} />
                    </div>

                    <div className="mx-[40px]">
                        <AppButton
                            onClick={handleLogin}
                            disabled={false}
                            cursor={(true) ? "pointer" : "not-allowed"}
                            variant="text"
                        >
                            Resend Code
                        </AppButton>
                    </div>
                    {/* <div className="mx-10">
                        <label className="block text-xs font-medium text-gray-400 mb-2">Email Address</label>

                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="w-full bg-[#25254d] border border-[#333] rounded-lg py-3 px-4 text-white placeholder-[#6B7280] focus:outline-none focus:border-blue-500 transition-colors"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="mx-10">
                        <div className="flex justify-between mb-2">
                            <label className="text-xs font-medium text-gray-400">Password</label>
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-[#25254d] border border-[#333] rounded-lg py-3 px-4 text-white placeholder-[#6B7280] focus:outline-none focus:border-blue-500 transition-colors"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    

                    <div className="mx-10 mt-6 flex justify-between items-center">
                        <button className="text-xs text-blue-500 hover:underline">Forgot password?</button>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="font-medium">System Status:</div>
                            <div className="text-green-500 tracking-wider">Operational</div>
                        </div>
                    </div> */}


                </div>

                {/* Footer Info */}


                {/* Bottom Links */}
                {/* <div className="mt-auto py-6 flex justify-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Security</a>
                    </div> */}
            </div>

            {/* --- FOOTER START --- */}
            <footer className="absolute bottom-8 w-full flex justify-center px-10">
                <div className="flex flex-col justify-between items-center w-full text-[11px] text-gray-500 uppercase tracking-widest">
                    <Divider color="white" opacity={0.1} />
                    <div className="mt-6">
                        © 2024 CreatorPlatform Inc. Administrative Terminal v2.4.0. All access is logged and monitored.
                    </div>
                </div>
            </footer>
            {/* --- FOOTER END --- */}
        </div >
    );
}