import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          {/* <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a> */}
          <Link
            href="/tentang-kami"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
              "text-foreground/60"
            )}
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </footer>
  );
}
