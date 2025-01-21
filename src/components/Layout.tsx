"use client"

import React, { ReactNode, useEffect } from "react"
import { initToastNotifications } from "@/lib/toastNotifications";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    useEffect(() => initToastNotifications(), []);

    return (
        <div className="w-full h-screen">
            {children}
        </div>
    );
}

export default Layout
