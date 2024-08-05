import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Tentang Guna Bitcoin",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Tentang Kami
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/guna-bitcoin.svg" alt={siteConfig.author} />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {/* {siteConfig.author} */}
            {/* Guna Bitcoin */}
          </h2>
          {/* <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p> */}
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Guna Bitcoin ialah platform yang membantu anda mencari perniagaan yang
          menerima Bitcoin di Malaysia. Matlamat kami adalah untuk memberi
          kesedaran yang Bitcoin bukan hanya sekadar aset spekulatif tetapi ia
          juga ialah wang sebenar pada zaman internet masa kini.
        </p>
      </div>
    </div>
  );
}
