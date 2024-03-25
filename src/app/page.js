'use client'

import Link from "next/link";
import userProfile from "../data.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(userProfile);
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Link href="/profile">Commencer</Link>
    </main>
  );
}
