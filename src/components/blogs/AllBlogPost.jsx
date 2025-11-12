//src/components/client/blogs/AllBlogPost.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blogs from "@/data/allBlogs.json";

const AllBlogPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="md:py-10 py-8">
      <div className="container mx-auto px-4">
        <h3 className="font-secondary font-[600] text-[22px] mb-6">
          All Blog Posts
        </h3>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              title={blog.title}
              className="group block overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  title={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#071F45]">
                  {blog.title}
                </h3>
                <p className="font-secondary font-[400] text-gray-600 text-[14px] mb-3 line-clamp-3">
                  {blog.description}
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div> */}
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center items-center gap-3 mt-10 text-[14px] text-black">
          <button
            className="px-3 py-1 rounded hover:bg-[#FCA213] hover:text-white"
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded hover:bg-[#FCA213] hover:text-white ${
                currentPage === i + 1 ? "bg-[#FCA213] text-white" : ""
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded hover:bg-[#FCA213] hover:text-white"
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AllBlogPost;
