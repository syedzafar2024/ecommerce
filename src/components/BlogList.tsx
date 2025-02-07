import React from "react";
import BlogCard from "./BlogCard";
import Button from "./Button";

const BlogList: React.FC = () => {
  const blogs = [
    {
      image: "/img/Rectangle 13.png",
      title: "Going all-in with millennial design",
      timeToRead: "5 min",
      date: "24th Dec 2024",
    },
    {
      image: "/img/Rectangle 14.png",
      title: "Going all-in with millennial design",
      timeToRead: "5 min",
      date: "24th Dec 2024",
    },
    {
      image: "/img/Rectangle 15.png",
      title: "Going all-in with millennial design",
      timeToRead: "5 min",
      date: "24th Dec 2024",
    },
  ];

  return (
    <section className="p-8 bg-mywite">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Blogs</h2>
        <p className="text-gray-600 mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            timeToRead={blog.timeToRead}
            date={blog.date}
          />
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-8">
        <Button text="View All Post" />
      </div>
    </section>
  );
};

export default BlogList;
