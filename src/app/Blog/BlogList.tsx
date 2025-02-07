// File: components/BlogList.tsx
"use client"
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const blogs = [
    {
      image: "Rectangle 13.png",
      title: "Going All-In With Minimalist Design",
      description: "A brief description of the blog post...",
      date: "January 1, 2023",
      author: "John Doe",
    },
    {
      image: "Rectangle 14.png",
      title: "Exploring New Ways of Decorating",
      description: "A brief description of the blog post...",
      date: "January 5, 2023",
      author: "Jane Smith",
    },
    {
      image: "Rectangle 15.png",
      title: "Handmade Pieces That Look Timeless",
      description: "A brief description of the blog post...",
      date: "January 10, 2023",
      author: "Alice Brown",
    },
    // Add more blogs as needed...
  ];

  const categories = ["Design", "Inspiration", "Lifestyle", "Tips"];
  const recentPosts = [
    { title: "Post One", link: "#" },
    { title: "Post Two", link: "#" },
    { title: "Post Three", link: "#" },
  ];

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginatedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  return (
    <div className="blog-list gap-5 items-center ml-10 space-y-10 mt-10">
      <div className="main-content flex-[3] mb-5">
        
        {paginatedBlogs.map((blog, index) => (
          <BlogCard text-gray-700 key={index} {...blog} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <Sidebar categories={categories} recentPosts={recentPosts} />
    </div>
  );
};

export default BlogList;
