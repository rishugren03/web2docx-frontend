// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/#pricing", changefreq: "monthly", priority: 0.8 },
  { url: "/signin", changefreq: "monthly", priority: 0.6 },
  { url: "/user/dashboard", changefreq: "monthly", priority: 0.4 },
  { url: "/blogs", changefreq: "monthly", priority: 0.2 },
];

const sitemap = new SitemapStream({ hostname: "https://web2docx.com" });

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data.toString());
  console.log("✅ Sitemap generated");
});

links.forEach((link) => sitemap.write(link));
sitemap.end();
