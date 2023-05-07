import React, { useState } from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Blog = ({ posts }) => {
  // const [filteredPosts, setFilteredPosts] = useState([]);
  const filteredPosts = posts.slice(0, 2);

  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="blog" id="blog">
      <div data-aos="fade-down" data-aos-duration="1000" className="top">
        <span className="title">News & Events</span>
        <span className="subTitle">
          Stay updated on news, events and school activities
        </span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="bottom">
        <div className="blogContainer">
          {filteredPosts.map((post) => (
            <Link key={post?._id} to={`/blog/${post?._id}`}>
              <div className="blogItem">
                <img src={post?.imgs[0]} alt={post?.title} />
                <span className="title">{post?.title}</span>
                <span className="body">{truncateString(post.body, 200)}</span>
                <div className="utils">
                  <span className="left">{post.updatedAt.slice(0,10)} | 3 min read</span>
                  {/* <div className="right">
                <ThumbUpOutlinedIcon className="icon" />
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <ShareOutlinedIcon className="icon" />
              </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/blog">
          <button>View all posts</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
