export const config = {
  siteMeta: {
    title: "Shimbun Hub",
    teamName: "HelloRusk",
    year: "2021",
    description: "日本の五大全国紙を集約します。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://shimbun-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/HelloRusk/shimbun-hub",
    },
  ],
};
