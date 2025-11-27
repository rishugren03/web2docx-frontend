import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-[14vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts (prioritize same category, then same tags, then any)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .map((p) => {
      const categoryMatch = p.category === post.category ? 3 : 0;
      const tagMatches = p.tags.filter((tag) => post.tags.includes(tag)).length;
      return { post: p, score: categoryMatch + tagMatches };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.post);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://web2docx.com/og-image-blog.png`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Web2Docx",
      logo: {
        "@type": "ImageObject",
        url: "https://web2docx.com/zap.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://web2docx.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Web2Docx Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.metaKeywords} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://web2docx.com/blog/${post.slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content="https://web2docx.com/og-image-blog.png"
        />
        <meta
          property="og:url"
          content={`https://web2docx.com/blog/${post.slug}`}
        />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:author" content={post.author} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content="https://web2docx.com/og-image-blog.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-[14vh] bg-gray-50">
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </button>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(post.publishedDate)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <span className="mr-2">By</span>
                <span className="font-semibold">{post.author}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-indigo max-w-none bg-white rounded-xl shadow-sm p-8 md:p-12">
            <ReactMarkdown
              components={{
                h1: ({ ...props }) => (
                  <h1
                    className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                    {...props}
                  />
                ),
                h2: ({ ...props }) => (
                  <h2
                    className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2"
                    {...props}
                  />
                ),
                h3: ({ ...props }) => (
                  <h3
                    className="text-xl font-semibold text-gray-900 mt-6 mb-3"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p
                    className="text-gray-700 leading-relaxed mb-4"
                    {...props}
                  />
                ),
                ul: ({ ...props }) => (
                  <ul
                    className="list-disc list-inside mb-4 space-y-2 text-gray-700"
                    {...props}
                  />
                ),
                ol: ({ ...props }) => (
                  <ol
                    className="list-decimal list-inside mb-4 space-y-2 text-gray-700"
                    {...props}
                  />
                ),
                li: ({ ...props }) => (
                  <li className="text-gray-700" {...props} />
                ),
                code: ({ inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match ? match[1] : "";
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={language}
                      PreTag="div"
                      className="rounded-lg mb-4"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className="bg-gray-100 text-indigo-600 px-2 py-1 rounded text-sm font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ ...props }) => <div {...props} />,
                a: ({ ...props }) => (
                  <a
                    className="text-indigo-600 hover:text-indigo-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 my-4"
                    {...props}
                  />
                ),
                table: ({ ...props }) => (
                  <div className="overflow-x-auto my-4">
                    <table
                      className="min-w-full border-collapse border border-gray-300"
                      {...props}
                    />
                  </div>
                ),
                th: ({ ...props }) => (
                  <th
                    className="border border-gray-300 bg-indigo-50 px-4 py-2 text-left font-semibold"
                    {...props}
                  />
                ),
                td: ({ ...props }) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-indigo-100 mb-6">
              Start converting HTML to PDF, DOCX, and images with Web2Docx
              today.
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Try Web2Docx Free
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 border border-gray-100 flex flex-col"
                  >
                    <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-semibold mb-3 self-start">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 flex-grow">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mt-auto">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedPost.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogPost;
