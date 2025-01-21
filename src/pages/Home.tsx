"use client"

import { ModeToggle } from "@/components/ModeToggle"

const Home = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center gap-2">
            Hello World <ModeToggle/>
        </div>
    );
}

export default Home