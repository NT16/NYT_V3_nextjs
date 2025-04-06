"use client";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link
      href="/"
      className="rounded-full font-mono text-xs/6 font-medium bg-gray-100 px-2 py-2 shadow-md fixed bottom-4 right-4 hover:bg-gray-200 transition duration-300 ease-in-out">
      Home
    </Link>
  );
}
