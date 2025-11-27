// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import { blogPosts } from "./src/data/blogPosts.js";

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/#pricing", changefreq: "monthly", priority: 0.8 },
  { url: "/signin", changefreq: "monthly", priority: 0.6 },
  { url: "/user/dashboard", changefreq: "monthly", priority: 0.4 },
  { url: "/blogs", changefreq: "weekly", priority: 0.9 },
  { url: "/privacy", changefreq: "yearly", priority: 0.3 },
  { url: "/terms", changefreq: "yearly", priority: 0.3 },
  { url: "/refund-policy", changefreq: "yearly", priority: 0.3 },
];

// Add all blog posts to sitemap
blogPosts.forEach((post) => {
  links.push({
    url: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: 0.7,
    lastmod: post.publishedDate,
  });
});

const sitemapStream = new SitemapStream({ hostname: "https://web2docx.com" });
const writeStream = createWriteStream("./public/sitemap.xml");
const pipe = promisify(pipeline);

async function generateSitemap() {
  try {
    for (const link of links) {
      sitemapStream.write(link);
    }
    sitemapStream.end();

    await pipe(sitemapStream, writeStream);
    console.log(`✅ Sitemap generated at ./public/sitemap.xml with ${links.length} URLs`);
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
}

generateSitemap();
