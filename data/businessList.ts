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
  type: "digital" | "fizikal" | "digital, fizikal";
  featured?: boolean;
}

export const businessList: Business[] = [
  {
    title: "Nutrient Native",
    imgSrc: "/biz/nutrient-native.webp",
    tags: ["natural"],
    href: "https://nutrientnative.orderla.co?via=FVoLvQ",
    description:
      "Reviving ancestral wisdom ☀️ | Nourishing body & soul with real, nutrient-dense food 🥩 | We Accept Bitcoin⚡",
    type: "fizikal",
    featured: true,
  },
  {
    title: "Bitcoin for Palestine",
    tags: ["sedekah"],
    imgSrc: "/biz/bitcoin-for-gaza.webp",
    href: "https://x.com/Yusef_Mahmoud1",
    description:
      "Emergency appeal for aid for the people of Gaza, donate directly to Youssef Mahmoud and follow the updates in his X (formally Twitter) account.",
    type: "digital",
  },
  {
    title: "Kabus Camp",
    imgSrc: "/biz/kabuscamp.webp",
    tags: ["campsite"],
    href: "https://www.tiktok.com/@kabuscamp",
    facebook: "https://www.facebook.com/p/Kabus-Camp-61563342671835/",
    instagram: "https://www.instagram.com/kabuscamp/",
    description: "Off grid campsite in Lenggong, Perak",
    type: "fizikal",
    featured: false,
  },
  {
    title: "Global Sadaqah",
    tags: ["sedekah"],
    imgSrc: "/biz/global-sadaqah.webp",
    href: "https://www.globalsadaqah.com/",
    description:
      "Give Charity, Sadaqah, Zakat, and Waqf online. Corporate Donors are always welcome. We’re based in Malaysia to serve the whole world.",
    type: "digital",
  },
  {
    title: "Hajid Honey",
    tags: ["natural"],
    description: "Belaian Madu Asli 🇲🇾 100% pure, raw & organic local honey.",
    imgSrc: "/biz/hajid-honey.webp",
    location: "Klang Valley",
    href: "https://hajidhoney.orderla.co/",
    instagram: "https://www.instagram.com/hajid.honey",
    type: "fizikal",
  },
  {
    title: "Ayam Lepas Lenggeng",
    tags: ["natural"],
    description: `Ayam Lepas Berdaulat. Untuk Yang Berjiwa Sihat | We prefer #Bitcoin.`,
    imgSrc: "/biz/ayam-lepas-lenggeng.webp",
    location: "Klang Valley & Negeri Sembilan",
    href: "https://ayamlepaslenggeng.orderla.my/ayam-lepas-bebas",
    twitter: "https://x.com/AyamLepasMY",
    facebook: "https://www.facebook.com/p/Ayam-Lepas-Lenggeng-61555749073667",
    type: "fizikal",
  },
  {
    title: "Tradisi Leluhur",
    tags: ["natural"],
    description: `Jika baik untuk dimakan, baik juga untuk luaran | Based Hair×Facial×Body Care Company | 100% Natural.`,
    imgSrc: "/biz/tradisi-leluhur.webp",
    href: "https://tradisileluhur.orderla.co/?ref=vSmqjU",
    takeApp: "https://take.app/tradisileluhur",
    twitter: "https://x.com/TradisiLeluhur",
    type: "fizikal",
    featured: false,
  },
  {
    title: "Blossom Space, Subang Jaya",
    tags: ["co-working space"],
    description: `A quiet space for you to work and blossom.`,
    location: "Subang Jaya, Selangor",
    imgSrc: "/biz/blossomspace.webp",
    href: "https://www.myespresso.my/",
    instagram: "https://www.instagram.com/myblossomspace/",
    type: "fizikal",
  },
  {
    title: "Nyenyak",
    tags: ["health"],
    description: `Membantu anda untuk tidur dengan lebih nyenyak & lebih berkualiti.
  
  Ada masalah tidur? Tanya di sini: https://ngl.link/tidurnyenyak1`,
    imgSrc: "/biz/nyenyak.webp",
    href: "https://nyenyak.orderla.co?via=TxOQOt",
    twitter: "https://x.com/OfficialNyenyak",
    type: "fizikal",
    featured: true,
  },
  {
    title: "Senji House",
    tags: ["natural"],
    description: `A house for the decentralized livings. ☀️💧🧲`,
    imgSrc: "/biz/senji-house.webp",
    location: "Ampang, Selangor",
    href: "https://senjihouse.com.my/",
    twitter: "https://x.com/senjihouse",
    instagram: "https://www.instagram.com/senjihouse/",
    type: "digital, fizikal",
  },
];
