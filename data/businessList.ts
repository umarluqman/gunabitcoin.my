interface Business {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
  location?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  takeApp?: string;
  tags?: string[];
}

export const businessList: Business[] = [
  {
    title: "Baba Low's",
    imgSrc: "/biz/baba-low.webp",
    tags: ["restoran"],
    href: "https://www.instagram.com/babalow_bangsar_utama/?hl=en",
    description:
      "■ Mon > Sat • 8.00am - 8.00pm ■ Sun • closed ■ Delivery & Takeaway & Dine-in | GrabFood | Foodpanda",
  },
  {
    title: "Anak Baba",
    tags: ["restoran"],
    imgSrc: "/biz/anak-baba.jpg",
    href: "https://www.instagram.com/restoran.anak.baba/?hl=en",
    description: "We Open Daily 7am to 10pm. ⚡️ Lighting Accepted",
  },
  {
    title: "Bitcoin for Palestine",
    tags: ["sedekah"],
    imgSrc: "/biz/bitcoin-for-gaza.jpg",
    href: "https://geyser.fund/project/bitcoinforpalestine",
    description:
      "Emergency appeal for aid for the people of Gaza, donate directly to Youssef Mahmoud and follow the updates in his X (formally Twitter) account.",
  },
  {
    title: "Global Sadaqah",
    tags: ["sedekah"],
    imgSrc: "/biz/global-sadaqah.webp",
    href: "https://www.globalsadaqah.com/",
    description:
      "Give Charity, Sadaqah, Zakat, and Waqf online. Corporate Donors are always welcome. We’re based in Malaysia to serve the whole world.",
  },
  {
    title: "Hajid Honey",
    tags: ["natural"],
    description: "Belaian Madu Asli 🇲🇾 100% pure, raw & organic local honey.",
    imgSrc: "/biz/hajid-honey.webp",
    location: "Klang Valley",
    href: "https://hajidhoney.orderla.co/",
    instagram: "https://www.instagram.com/hajid.honey",
  },
  {
    title: "Ayam Lepas Lenggeng",
    tags: ["natural"],
    description: `Ayam Lepas Berdaulat. Untuk Yang Berjiwa Sihat | We prefer #Bitcoin.`,
    imgSrc: "/biz/ayam-lepas-lenggeng.jpg",
    location: "Klang Valley & Negeri Sembilan",
    href: "https://ayamlepaslenggeng.orderla.my/ayam-lepas-bebas",
    twitter: "https://x.com/AyamLepasMY",
    facebook: "https://www.facebook.com/p/Ayam-Lepas-Lenggeng-61555749073667",
  },
  {
    title: "Tradisi Leluhur",
    tags: ["natural"],
    description: `Jika baik untuk dimakan, baik juga untuk luaran | Based Hair×Facial×Body Care Company | 100% Natural.`,
    imgSrc: "/biz/tradisi-leluhur.jpg",
    href: "https://tradisileluhur.orderla.my/store",
    takeApp: "https://take.app/tradisileluhur",
    twitter: "https://x.com/TradisiLeluhur",
  },
  {
    title: "My Espresso Cafe",
    tags: ["restoran"],
    description: `Best place for high quality coffee.
  Accepts Bitcoin.`,
    location: "Subang Jaya, Selangor",
    imgSrc: "/biz/myespresso-coffee.jpg",
    href: "https://www.myespresso.my/",
  },
  {
    title: "Nyenyak",
    tags: ["health"],
    description: `Membantu anda untuk tidur dengan lebih nyenyak & lebih berkualiti.
  
  Ada masalah tidur? Tanya di sini: https://ngl.link/tidurnyenyak1`,
    imgSrc: "/biz/nyenyak.jpg",
    href: "https://nyenyak.orderla.co/",
    twitter: "https://x.com/OfficialNyenyak",
  },
  {
    title: "Senji House",
    tags: ["natural"],
    description: `A house for the decentralized livings. ☀️💧🧲`,
    imgSrc: "/biz/senji-house.jpg",
    location: "Ampang, Selangor",
    href: "https://senjihouse.com.my/",
    twitter: "https://x.com/senjihouse",
    instagram: "https://www.instagram.com/senjihouse/",
  },
];
