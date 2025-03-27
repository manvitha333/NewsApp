"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css"; // ✅ Import global CSS file

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Run only on client-side
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      if (!isAuthenticated) {
        router.push("/signin");
      }
    }
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
