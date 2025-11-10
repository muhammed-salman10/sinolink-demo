
import AllBlogPost from '@/src/components/blogs/AllBlogPost'
import Hero from '@/src/components/blogs/Hero'
import RecentBlogPost from '@/src/components/blogs/RecentBlogPost'
import React from 'react'

function Blogs() {
  return (
    <div>
        <Hero/>
        <RecentBlogPost/>
        <AllBlogPost/>
    </div>
  )
}

export default Blogs