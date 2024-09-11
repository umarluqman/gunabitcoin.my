import { posts } from "#site/content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessList } from "@/data/businessList";
import { sortPosts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      {/* <BackgroundGrid /> */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center text-6xl font-bold">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            Guna
            <span className="flex items-center gap-3">
              Bitcoin
              <Image
                src="/bitcoin-logo.svg"
                alt="Bitcoin"
                width={60}
                height={60}
              />
            </span>
          </div>

          <div className="text-center text-lg font-light">
            Bukan hanya sekadar aset spekulatif, ianya duit sebenar zaman
            internet masa kini.
          </div>
          <div className="mt-6 flex justify-center">
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="relative">Belajar Lanjut</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Akan Datang</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
          </div>
        </div>
      </section>
      <Card className="max-w-5xl mx-auto space-y-6">
        <CardHeader>
          <CardTitle>Perniagaan / Organisasi Yang Terima Bitcoin</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {businessList
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item) => {
              return (
                <div className="flex items-center gap-4" key={item.title}>
                  <Avatar className="h-12 w-12 flex">
                    <AvatarImage src={item.imgSrc} alt="Avatar" />
                    <AvatarFallback>GB</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground max-w-lg">
                      {item.description}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <div className="flex gap-2">
                      {/* {item.twitter && (
                        <Link
                          href={item.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-400 hover:text-blue-500"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </Link>
                      )} */}
                      {/* {item.facebook && (
                        <Link
                          href={item.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </Link>
                      )}
                      {item.instagram && (
                        <Link
                          href={item.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-pink-500 hover:text-pink-600"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </Link>
                      )} */}
                    </div>
                  </div>
                  <AnimatedButton href={item.href ?? "#"} />
                  {/* <Link
                    href={item.href ?? "#"}
                    className="ml-auto font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Lihat</Button>
                  </Link> */}
                </div>
              );
            })}
        </CardContent>
      </Card>
      {/* <CurvedArrowWrapper fromSelector="#from" toSelector="#to" /> */}
      {/* <WholePage /> */}
      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold"></h1>
      </div> */}

      {/* <BusinessList /> */}
      {/* <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            post.published && (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                />
              </li>
            )
          ))}
        </ul>
      </section> */}
    </>
  );
}
