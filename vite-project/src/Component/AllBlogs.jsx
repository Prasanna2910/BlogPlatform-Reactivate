import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-4 text-[#3D3D3D]">All Blogs</h1>
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="p-4 border-b bg-[#FFFAEC] shadow-md rounded mb-4"
            >
              <h2 className="text-xl font-semibold text-[#578E7E]">
                {post.title}
              </h2>
              <p className="text-[#3D3D3D]">{post.content}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-[#3D3D3D]">No blogs available.</p>
        )}
      </div>
      <div className="p-6 pt-0 flex justify-center items-center">
        <button
          onClick={() => navigate("/post")}
          className="rounded-lg bg-[#3D3D3D] py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
        >
          Write another!!
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
