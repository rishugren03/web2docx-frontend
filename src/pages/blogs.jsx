import React from "react";
import { Helmet } from "react-helmet";
import Web2DocxBlog from "../components/blogs/ProductInfo";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Web2Docx Blog – Tips, Updates, and Product News</title>
        <meta
          name="description"
          content="Explore Web2Docx blog articles to learn about features, updates, and how to use HTML to DOCX/PDF conversions effectively."
        />
        <meta property="og:title" content="Web2Docx Blog – Tips & Updates" />
        <meta
          property="og:description"
          content="Read the latest from Web2Docx about HTML to PDF/DOCX conversions, tips, product updates, and announcements."
        />
        <meta
          property="og:image"
          content="https://web2docx.com/og-image-blog.png"
        />
        <meta property="og:url" content="https://web2docx.com/blogs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web2Docx Blog – Product News & Tutorials"
        />
        <meta
          name="twitter:description"
          content="Stay up to date with Web2Docx product news, HTML export tips, and developer guides."
        />
        <meta
          name="twitter:image"
          content="https://web2docx.com/og-image-blog.png"
        />
      </Helmet>

      <div className="pt-[14vh]">
        <Web2DocxBlog />
      </div>
    </>
  );
};

export default Blogs;
