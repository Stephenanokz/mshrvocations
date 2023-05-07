import React, { useEffect, useState } from "react";
import "./BlogInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";

const BlogInfo = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASEURL,
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("posts", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_REACT_APP_JWT_TOKEN}`,
          },
        });
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPosts();
  }, []);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return (
    <div className="BlogInfo">
      <Banner
        title="News & Events"
        subTitle="Stay updated on news, events and the activities of our congregation"
      />
      {isLoading ? (
        <div className="loading__inline">Loading...</div>
      ) : (
        <div className="blogContainer">
          {posts.map((post) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={post._id}
              className="blogItem"
            >
              <img src={post?.imgs[0]} alt={post.title} />
              <span className="title">{post.title}</span>
              <span className="body">{truncateString(post.body, 200)}</span>
              <div className="utils">
                <span className="left">
                  {post.createdAt.slice(0, 10)} | 3 min read
                </span>
                {/* <div className="right">
                <ThumbUpOutlinedIcon className="icon" />
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <ShareOutlinedIcon className="icon" />
              </div> */}
              </div>
              <Link to={`/blog/${post._id}`}>
                <button>
                  Read
                  <ArrowCircleRightIcon className="icon" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogInfo;
