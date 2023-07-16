import React, { useEffect, useState } from "react";
import cl from "./Posts.module.css";
import axios from "axios";

const Posts = ({ inputOverflow }) => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get("https://cloud.codesupply.co/endpoint/react/data.json")
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.error("Error: Посты не найдены!", error)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post => {
    const searchContent = post.title.toLowerCase() + post.text.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <div className={ cl.container }>
      <input
        className={ cl.input }
        type="text"
        value={ searchQuery }
        onChange={ handleSearchChange }
        placeholder=" Поиск постов..."
        style={ { visibility: inputOverflow } }
      />

      <div className={ cl.posts }>
        { filteredPosts.map(post => (
          <div key={ post.title } className={ cl.post }>
            <img src={ post.img } alt={ post.title } className={ cl.post__img } />
            <div className={ cl.post__content }>
              <span className={ cl.post__tags }>{ post.tags }</span>
              <h2 className={ cl.post__title }>{ post.title }</h2>
              <div className={ cl.post__meta }>
                <span className={ cl.post__author }>{ post.autor }</span>
                <span className={ cl.post__date }>{ post.date }</span>
                <span className={ cl.post__views }>{ post.views } Views</span>
              </div>
              <p className={ cl.post__description }>{ post.text }</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
};

export default Posts;
