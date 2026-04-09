"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreatorGuard({ children }: any) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user && !user.hasCreatorAccess) {
            router.push("/premium-access");
        }
    }, [user]);

    if (!user?.hasCreatorAccess) return null;

    return children;
}