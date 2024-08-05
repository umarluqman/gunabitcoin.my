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
}

export const businessList: Business[] = [
  {
    title: "Ayam Lepas Lenggeng",
    description: `Ayam Lepas Berdaulat. Untuk Yang Berjiwa Sihat | We prefer #Bitcoin.`,
    imgSrc: "/biz/ayam-lepas-lenggeng.jpg",
    location: "Klang Valley & Negeri Sembilan",
    href: "https://ayamlepaslenggeng.orderla.my/ayam-lepas-bebas",
    twitter: "https://x.com/AyamLepasMY",
    facebook: "https://www.facebook.com/p/Ayam-Lepas-Lenggeng-61555749073667",
  },
  {
    title: "Tradisi Leluhur",
    description: `Jika baik untuk dimakan, baik juga untuk luaran | Based Hair×Facial×Body Care Company | 100% Natural.`,
    imgSrc: "/biz/tradisi-leluhur.jpg",
    href: "https://tradisileluhur.orderla.my/store",
    takeApp: "https://take.app/tradisileluhur",
    twitter: "https://x.com/TradisiLeluhur",
  },
  {
    title: "MyEspressoCafe",
    description: `Best place for high quality coffee.
  Accepts Bitcoin.`,
    location: "Subang Jaya, Selangor",
    imgSrc: "/biz/myespresso-coffee.jpg",
    href: "/blog/the-time-machine",
  },
  {
    title: "Nyenyak",
    description: `Membantu anda untuk tidur dengan lebih nyenyak & lebih berkualiti.
  
  Ada masalah tidur? Tanya di sini: https://ngl.link/tidurnyenyak1`,
    imgSrc: "/biz/nyenyak.jpg",
    href: "https://nyenyak.orderla.co/",
    twitter: "https://x.com/OfficialNyenyak",
  },
  {
    title: "Senji House",
    description: `A house for the decentralized livings. ☀️💧🧲`,
    imgSrc: "/biz/senji-house.jpg",
    location: "Ampang, Selangor",
    href: "https://senjihouse.com.my/",
    twitter: "https://x.com/senjihouse",
    instagram: "https://www.instagram.com/senjihouse/",
  },
];
