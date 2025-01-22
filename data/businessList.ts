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
}

export const businessList: Business[] = [
  {
    title: "Nutrient Native",
    imgSrc: "/biz/nutrient-native.jpeg",
    tags: ["natural"],
    href: "https://nutrientnative.orderla.co?via=FVoLvQ",
    description:
      "Reviving ancestral wisdom ☀️ | Nourishing body & soul with real, nutrient-dense food 🥩 | We Accept Bitcoin⚡",
    type: "fizikal",
  },
  {
    title: "Baba Low's",
    imgSrc: "/biz/baba-low.webp",
    tags: ["restoran"],
    href: "https://www.instagram.com/babalow_bangsar_utama/?hl=en",
    description:
      "■ Mon > Sat • 8.00am - 8.00pm ■ Sun • closed ■ Delivery & Takeaway & Dine-in | GrabFood | Foodpanda",
    type: "fizikal",
  },
  {
    title: "Anak Baba",
    tags: ["restoran"],
    imgSrc: "/biz/anak-baba.jpg",
    href: "https://www.instagram.com/restoran.anak.baba/?hl=en",
    description: "We Open Daily 7am to 10pm. ⚡️ Lighting Accepted",
    type: "fizikal",
  },
  {
    title: "Bitcoin for Palestine",
    tags: ["sedekah"],
    imgSrc: "/biz/bitcoin-for-gaza.jpg",
    href: "https://btcpay.foragoodcause.xyz/apps/37W6GRGutGU9a4F61uHeFcjHFyQv/crowdfund",
    description:
      "Emergency appeal for aid for the people of Gaza, donate directly to Youssef Mahmoud and follow the updates in his X (formally Twitter) account.",
    type: "digital",
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
    imgSrc: "/biz/ayam-lepas-lenggeng.jpg",
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
    imgSrc: "/biz/tradisi-leluhur.jpg",
    href: "https://tradisileluhur.orderla.my/store",
    takeApp: "https://take.app/tradisileluhur",
    twitter: "https://x.com/TradisiLeluhur",
    type: "fizikal",
  },
  {
    title: "My Espresso Cafe",
    tags: ["restoran"],
    description: `Best place for high quality coffee.
  Accepts Bitcoin.`,
    location: "Subang Jaya, Selangor",
    imgSrc: "/biz/myespresso-coffee.jpg",
    href: "https://www.myespresso.my/",
    type: "fizikal",
  },
  {
    title: "Nyenyak",
    tags: ["health"],
    description: `Membantu anda untuk tidur dengan lebih nyenyak & lebih berkualiti.
  
  Ada masalah tidur? Tanya di sini: https://ngl.link/tidurnyenyak1`,
    imgSrc: "/biz/nyenyak.png",
    href: "https://nyenyak.orderla.co?via=TxOQOt",
    twitter: "https://x.com/OfficialNyenyak",
    type: "fizikal",
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
    type: "digital, fizikal",
  },
];
