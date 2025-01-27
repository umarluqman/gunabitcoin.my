import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-16 mb-20">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Tentang Kami</h3>
            <p className="text-sm text-muted-foreground">
              Guna Bitcoin membantu anda mencari perniagaan yang menerima
              Bitcoin sebagai kaedah pembayaran di Malaysia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Pautan</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/tentang-kami"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tentang Kami
              </Link>
              {/* <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link> */}
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Tambahan</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="https://github.com/umarluqman/gunabitcoin.my"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Sumber Terbuka
              </Link>
              <Link
                href="https://github.com/umarluqman/gunabitcoin.my"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                Dialisis MY - Cari lebih 900+ pusat dialisis dengan mudah.
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
