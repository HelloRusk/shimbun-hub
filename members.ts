import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "読売新聞",
    bio:
      "読売新聞オンラインは読売新聞のニュース・情報サイト。社会、スポーツ、政治、経済、国際などの最新ニュースや教育、医療などの読み物、映像ニュースも充実。ポケモン、発言小町、クーポンやプレゼントも。",
    avatarSrc: "/avatars/yomiuri.jpg",
    sources: [
      "https://assets.wor.jp/rss/rdf/yomiuri/politics.rdf",
      "https://assets.wor.jp/rss/rdf/yomiuri/economy.rdf",
      "https://assets.wor.jp/rss/rdf/yomiuri/national.rdf",
      "https://assets.wor.jp/rss/rdf/yomiuri/world.rdf"
    ],
    twitterUsername: "Yomiuri_Online",
    websiteUrl: "https://www.yomiuri.co.jp/",
  },
  {
    name: "朝日新聞",
    bio: "朝日新聞デジタルは朝日新聞のニュースサイトです。政治、経済、社会、国際、スポーツ、カルチャー、サイエンスなどの速報ニュースに加え、教育、医療、環境などの話題や写真も。",
    avatarSrc: "/avatars/asahi.png",
    sources: [
      "http://www.asahi.com/rss/asahi/politics.rdf",
      "http://www.asahi.com/rss/asahi/business.rdf",
      "http://www.asahi.com/rss/asahi/national.rdf",
      "http://www.asahi.com/rss/asahi/international.rdf"
    ],
    twitterUsername: "asahi",
    websiteUrl: "https://www.asahi.com/",
  },
  {
    name: "毎日新聞",
    bio: "毎日新聞のニュース・情報サイトです。事件や話題、経済や政治のニュース、スポーツや芸能、映画などのエンターテインメントの最新ニュースを掲載しています。",
    avatarSrc: "/avatars/mainichi.jpg",
    sources: ["https://mainichi.jp/rss/etc/mainichi-flash.rss"],
    twitterUsername: "mainichi",
    websiteUrl: "https://mainichi.jp/",
  },
  {
    name: "日本経済新聞",
    bio: "日本経済新聞の電子版。日経や日経ＢＰの提供する経済、企業、国際、政治、マーケット、情報・通信、社会など各分野のニュース。ビジネス、マネー、IT、スポーツ、住宅、キャリアなどの専門情報も満載。",
    avatarSrc: "/avatars/nikkei.jpg",
    sources: [
      "https://assets.wor.jp/rss/rdf/nikkei/economy.rdf",
      "https://assets.wor.jp/rss/rdf/nikkei/society.rdf",
      "https://assets.wor.jp/rss/rdf/nikkei/international.rdf"
    ],
    twitterUsername: "nikkei",
    websiteUrl: "https://www.nikkei.com/",
  },
  {
    name: "産経新聞",
    bio: "産経新聞社のニュースサイト。政治、経済、国際、社会、スポーツ、エンタメ、災害情報などの速報記事と解説記事を掲載しています。",
    avatarSrc: "/avatars/sankei.png",
    sources: [
      "https://assets.wor.jp/rss/rdf/sankei/politics.rdf",
      "https://assets.wor.jp/rss/rdf/sankei/economy.rdf",
      "https://assets.wor.jp/rss/rdf/sankei/affairs.rdf",
      "https://assets.wor.jp/rss/rdf/sankei/world.rdf"
    ],
    twitterUsername: "Sankei_news",
    websiteUrl: "https://www.sankei.com/"
  },
];
