// File: components/BlogCard.tsx
import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, date, author }) => {
  return (
    <div className="blog-card text-gray-700 ">
      <img src={"/img/Rectangle 13.png"} alt={title} className="blog-image" />
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-meta">
          <span>{date}</span> | <span>{author}</span>
        </div>
        <p className="blog-description text-gray-700">{description}</p>
        <a href="#" className="read-more">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
