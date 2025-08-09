import React from "react";

// Step 1: Store product data in an array
const trendingProducts = [
  { name: "React.js", slug: "react-js" },
  { name: "Node.js", slug: "node-js" },
  { name: "Express.js", slug: "express-js" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Mongoose ODM", slug: "mongoose-odm" },
  { name: "REST APIs", slug: "rest-api" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Next.js", slug: "next-js" },
  { name: "Redux Toolkit", slug: "redux-toolkit" },
  { name: "Tailwind CSS", slug: "tailwind-css" },
  { name: "React Query", slug: "react-query" },
  { name: "JWT Authentication", slug: "jwt-authentication" },
  { name: "Socket.IO", slug: "socket-io" },
  { name: "Bcrypt", slug: "bcrypt-password-hashing" },
  { name: "Zod + React Hook Form", slug: "form-validation-zod" },
  { name: "CORS Handling", slug: "cors-node-express" },
  { name: "File Uploads with Multer", slug: "multer-file-upload" },
  { name: "Cloudinary Integration", slug: "cloudinary-image-upload" },
  { name: "Nodemailer", slug: "nodemailer-emails" },
  { name: "Vercel Deployment", slug: "vercel-hosting" },
  { name: "Render Deployment", slug: "render-node-hosting" },
  { name: "PM2 & Forever", slug: "pm2-node-process-manager" },
  { name: "Docker for Node Apps", slug: "docker-nodejs" }
];

const TrendingTopics = () => {
  return (
<div className="blog-tags-container px-4 sm:px-6 md:px-10 lg:px-16 py-8">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
    Trending Topics
  </h2>

  <div className="flex flex-wrap gap-3 justify-center">
    {trendingProducts.map((product) => (
      <a
        key={product.slug}
        href={`/products/${product.slug}`}
        className=" border-1 border-black inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white-600 text-black text-sm font-semibold hover:bg-slate-200 transition-colors duration-300 whitespace-nowrap"
      >
        {product.name}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path d="M10.5 2a.5.5 0 0 0 0 1h2.793L7.146 9.146a.5.5 0 1 0 .708.708L14 3.707V6.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4z"/>
  <path d="M13 13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10A.5.5 0 0 1 2.5 3H6a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-1 0v3.5z"/>
</svg>

      </a>
    ))}
  </div>
</div>

  );
};

export default TrendingTopics;
