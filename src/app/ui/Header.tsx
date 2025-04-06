"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Link href="/" className="text-2xl font-normal tracking-wide mt-4 mb-4">
        <h1>New York Times Bestsellers</h1>
      </Link>
      <Link
        href="/about"
        className="font-mono text-xs/6 font-medium tracking-wide mt-4 mb-4">
        About
      </Link>
    </div>
  );
}
