"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import "./globals.css";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      if (!isAuthenticated) {
        router.push("/signin");
      }
    }
  }, [router]); // ✅ Fix missing dependency

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// ✅ Add PropTypes validation
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
