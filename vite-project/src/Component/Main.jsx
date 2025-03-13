import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setTitle("");
    setContent("");
    
    // Navigate after posting
    navigate("/blogs");
  };

  return (
    <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230903/pngtree-a-white-fabric-being-blown-in-the-wind-image_13200786.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="mb-6 ">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-12 border p-3 mb-2 rounded text-lg bg-white"
            required
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-96 p-2 mb-2 border rounded bg-white"
            required
          ></textarea>

          <div className=" flex justify-center"><div className=" flex justify-between w-96 items-center p-2">
            <button
              type="submit"
              className="bg-[#3D3D3D] text-white px-4 py-2 rounded"
            >
              Post
            </button>

            <button
              type="button"
              className="bg-[#3D3D3D] text-white px-4 py-2 rounded"
              onClick={() => navigate("/blogs")}
            >
              View all blogs
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
