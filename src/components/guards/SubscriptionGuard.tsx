"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SubscriptionGuard({ children }: any) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user && !user.hasSubscription) {
            router.push("/subscription-required");
        }
    }, [user]);

    if (!user?.hasSubscription) return null;

    return children;
}