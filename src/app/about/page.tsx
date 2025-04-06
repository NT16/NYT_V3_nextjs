"use client";
import Link from "next/link";
import FloatingButton from "@/app/ui/FloatingButton";

export default function Page() {
  return (
    <div className="mx-auto">
      <h2 className="mx-auto w-fit text-xl font-normal text-center tracking-wide mb-8 py-1 px-14 rounded-md bg-emerald-50">
        About
      </h2>
      <div className="mx-auto flex mb-8 justify-center">
        Page built with &nbsp;
        <div className="mx-4">
          <ul className="font-mono text-xs/6 font-medium">
            <li>Next.js 13.4</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>

      <div className="w-[500px] text-wrap mx-auto">
        Special thanks to &nbsp;
        <Link
          href="https://css-loaders.com"
          className="font-mono text-xs/6 font-medium underline text-emerald-600">
          "CSS Loaders"
        </Link>
        &nbsp; for maintaining an amazing collection of loaders. Loader used
        here is from this site.
      </div>
      <FloatingButton />
    </div>
  );
}
