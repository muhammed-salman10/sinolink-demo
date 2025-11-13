// src/app/blogs/page.jsx

export const metadata = {
  title: "Sinolink Insights – Logistics & Freight Industry Blog",
  description:
    " Stay updated with logistics trends, shipping tips, and Sinolink’s insights on global freight and supply chain management.",
  alternates: {
    canonical: "https://sinolinkinternational.com/blogs",
  },
};


import React from 'react'
import Blogs from './Blogs'

function Page() {
  return (
    <div>
      <Blogs/>
    </div>
  )
}

export default Page