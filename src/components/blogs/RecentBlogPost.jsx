//src/components/client/blogs/RecentBlogPosts.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import blogData from "@/data/allBlogs.json";

function RecentBlogPost() {
  const recentBlogs = blogData.slice(-3);
  const wideBlog = recentBlogs[2];
  console.log(wideBlog);

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="font-secondary text-[22px] font-[600]">
          Recent blog posts
        </h2>

        {/* First row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 md:mt-10 mt-8">
          {recentBlogs.slice(0, 2).map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              <Link href={`/blogs/${blog.slug}`} title={blog.title}>
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    title={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-5">
                  <h3 className="text-[18px] font-semibold flex items-center justify-between group-hover:text-[#071F45]">
                    {blog.title}
                    <span className="text-[12px]">
                      <RxArrowTopRight size={20} />
                    </span>
                  </h3>
                  <p className="text-[14px] text-gray-600 mt-2">
                    {blog.description}
                  </p>
                  {/* <div className="mt-6 flex flex-wrap gap-2 font-secondary font-[500]">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{ backgroundColor: tag.bg, color: tag.text }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="mt-8 md:mt-10">
          <Link
            href={`/blogs/${wideBlog.slug}`}
            className="block"
            title={wideBlog.title}
          >
            <div className="flex flex-col md:flex-row overflow-hidden shadow-sm hover:shadow-lg transition group">
              {/* Image */}
              <div className="relative w-full h-60 sm:h-64 md:w-1/2 md:h-[370px] lg:h-[300px]">
                <Image
                  src={wideBlog.image}
                  alt={wideBlog.title}
                  title={wideBlog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-10 py-5 md:py-3 lg:py-6  ">
                <div>
                  <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-3 group-hover:text-[#071F45]">
                    {wideBlog.title}
                  </h2>
                  <p className="text-gray-600 text-[14px] sm:text-[14px]  lg:text-[16px] mb-4">
                    {wideBlog.description}
                  </p>
                </div>

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 mt-4">
                    {wideBlog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm"
                        style={{ backgroundColor: tag.bg, color: tag.text }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RecentBlogPost;
