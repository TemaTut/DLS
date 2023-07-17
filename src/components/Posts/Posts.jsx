import React, { useEffect, useState } from "react";
import axios from "axios";

import cl from "./Posts.module.css";
import Post from "../Post/Post";

const Posts = ({ inputOverflow }) => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://cloud.codesupply.co/endpoint/react/data.json")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error: Посты не найдены!", error);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPosts = posts.filter((post) => {
        const searchContent = post.title.toLowerCase() + post.text.toLowerCase();
        return searchContent.includes(searchQuery.toLowerCase());
    });

    return (
        <div className={cl.container}>
            <input
                className={cl.input}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder=" Поиск постов..."
                style={{ visibility: inputOverflow }}
            />

            <div className={cl.posts}>
                {filteredPosts.map((post) => (
                    <Post key={post.title} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
