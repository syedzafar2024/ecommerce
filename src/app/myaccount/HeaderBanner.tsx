// File: components/HeaderBanner.tsx

import React from "react";

type Breadcrumb = {
  name: string;
  link?: string; // Optional for inactive breadcrumbs
};

type Props = {
  title: string;
  breadcrumbs: Breadcrumb[];

};

const HeaderBanner: React.FC<Props> = ({ title, breadcrumbs, }) => {
  return (
    <div
    className="relative bg-[#FAF4F4] w-[1440px] h-[316px] text-center py-32"
    style={{
      backgroundImage: `url('/img/Rectangle 1.png')`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <div className="banner-content w-[1440px] h-[316px] text-center py-32">
        <h1>{title}</h1>
        <div className="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              {breadcrumb.link ? (
                <a href={breadcrumb.link}>{breadcrumb.name}</a>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && " > "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
