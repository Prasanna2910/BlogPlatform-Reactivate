import { useNavigate } from "react-router-dom";
import TypingText from "./TypingText"; 
import BlogifyEffect from "./BlogifyEffect";


function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-evenly w-full h-screen items-center">
        <div>
          <h1 className="text-3xl font-semibold">Welcome to</h1>
          <BlogifyEffect />
        </div>
        <div className="bg-[#578E7E] w-2/5 h-full flex justify-center items-center">
          <div className="relative flex w-92 flex-col rounded-xl bg-white text-[#3D3D3D] shadow-md">
            {/* <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600"></div> */}
            <img src="https://cc-west-blog-assets.s3.amazonaws.com/uploads/2017/11/content-writing-blogs.jpg" alt="" className="rounded-xl"/>
            <div className="p-6">
                
              <TypingText />
              
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => navigate("/post")}
                className="rounded-lg bg-[#3D3D3D] py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
