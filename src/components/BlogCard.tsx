import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  timeToRead: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, timeToRead, date }) => {
  return (
    <div className="flex flex-col items-center text-center p-2 bg-mywite rounded-lg shadow-md">
      {/* Blog Image */}
      <img
        src={image}
        alt={title}
        className="w-[293px] h-[293px] object-cover rounded-md mb-6"
      />

      {/* Blog Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Read More Button */}
      <button className="text-blue-500 font-medium hover:underline mb-4">
        Read More
      </button>

      {/* Blog Info */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <i className="fas fa-clock"></i> {timeToRead}
        </span>
        <span className="flex items-center gap-1">
          <i className="fas fa-calendar"></i> {date}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
