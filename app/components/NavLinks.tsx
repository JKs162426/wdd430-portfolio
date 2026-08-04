"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex gap-6 text-lg">
      <Link
        href="/"
        className={
          pathname === "/"
            ? "font-bold underline"
            : "text-gray-300 hover:underline"
        }
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "font-bold underline"
            : "text-gray-300 hover:underline"
        }
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        About
      </Link>
      <Link
        href="/projects"
        className={
          pathname === "/projects"
            ? "font-bold underline"
            : "text-gray-300 hover:underline"
        }
        aria-current={pathname === "/projects" ? "page" : undefined}
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className={
          pathname === "/contact"
            ? "font-bold underline"
            : "text-gray-300 hover:underline"
        }
        aria-current={pathname === "/contact" ? "page" : undefined}
      >
        Contact
      </Link>
    </nav>
  );
}
