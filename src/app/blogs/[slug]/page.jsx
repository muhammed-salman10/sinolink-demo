"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import blogDetails from "@/src/data/blogDetails";
import { RxArrowTopRight } from "react-icons/rx";
import CtaBanner from "@/src/components/common/cta-banner/CtaBanner";

function Page() {
  const { slug } = useParams();

  const blog = blogDetails.find((b) => b.slug === slug);

  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <section className="md:py-10 lg:mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:mb-14">

          {/* ARTICLE */}
          <article className="md:col-span-8 order-1 md:order-2">
            <h1 className="text-[20px] lg:text-[32px] font-[600] leading-tight mt-10 md:mt-0">
              {blog.title}
            </h1>

            <div className="relative w-full h-56 lg:h-[370px] mt-6 overflow-hidden rounded-xl">
              <Image
                src={blog.heroImage}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="font-secondary font-[400] max-w-none mt-6 lg:text-[16px] md:text-[14px] space-y-4">
              {blog.content.map((block, i) => {
                if (block.type === "p") return <p key={i}>{block.text}</p>;

                if (block.type === "h3")
                  return (
                    <h3
                      key={i}
                      className={`text-[20px] font-semibold mt-6 ${block.className || ""}`}
                    >
                      {block.text}
                    </h3>
                  );

                if (block.type === "span")
                  return (
                    <span key={i} className={`${block.className}`}>
                      {block.text}
                    </span>
                  );

                if (block.type === "list")
                  return (
                    <ul key={i} className={`${block.listClass}`}>
                      {block.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  );

                return null;
              })}
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="md:col-span-4 order-2 md:order-1">
            <h3 className="font-secondary text-[18px] md:text-[20px] font-semibold mb-4">
              Recent blog posts
            </h3>

            {blogDetails.slice(0, 3).map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="block group border-gray-200 overflow-hidden mb-6 hover:shadow-md transition"
              >
                <div className="relative w-full h-44 md:h-60">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex items-start justify-between gap-3">
                  <h4 className="lg:text-[16px] md:text-[14px] font-semibold leading-snug group-hover:underline decoration-[#FCA213]">
                    {post.title}
                  </h4>
                  <RxArrowTopRight className="mt-1 shrink-0" />
                </div>
              </Link>
            ))}
          </aside>
        </div>
        <CtaBanner/>
      </div>
    </section>
  );
}

export default Page;
