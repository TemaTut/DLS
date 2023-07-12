import React, { useEffect, useState } from "react";
import cl from "./Posts.module.css";
import Post from "../Post/Post";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://cloud.codesupply.co/endpoint/react/data.json")
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }, [])


  return (
    <div className={ cl.container }>
      <div className={ cl.posts }>
        { posts.map(post => (
          <div key={ post.title } className={ cl.post }>
            <img src={ post.img } alt={ post.title } className="post-image" />
            <span className="post-tags">{ post.tags }</span>

            <h2 className="post-title">{ post.title }</h2>
            <div className="post-meta">
              <span className="post-author">{ post.autor }</span>
              <span className="post-date">{ post.date }</span>
              <span className="post-views">{ post.views } Views</span>
            </div>
            <p className="post-description">{ post.text }</p>
            <div className="post-meta">
              <span className="post-author">{ post.autor }</span>
              <span className="post-date">{ post.date }</span>
              <span className="post-views">{ post.views }</span>
            </div>
          </div>
        )) }
      </div>
    </div>

  );
};

export default Posts;
