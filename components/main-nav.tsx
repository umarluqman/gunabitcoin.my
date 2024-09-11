"use client";

import { LucideArrowRightLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        {/* <span className="font-bold">{siteConfig.name}</span> */}
      </Link>

      <Button variant="secondary">
        <Link
          href="https://satrate.musdomworks.com/"
          target="_blank"
          className="flex items-center gap-2"
          // className={cn(
          //   "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block"
          // )}
        >
          Sats (100M BTC) <LucideArrowRightLeft className="h-4 w-4" /> MYR
        </Link>
      </Button>

      {/* <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link> */}
      {/* <Link
        href="/tentang-kami"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/tentang-kami"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Tentang Kami
      </Link> */}
    </nav>
  );
}
