import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../Post/Post";

import cl from "./Posts.module.css";

const Posts = ({ inputOverflow }) => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://cloud.codesupply.co/endpoint/react/data.json")
            .then((response) => {
                setPosts(
                    response.data.map((post) => ({
                        ...post,
                        isVisible: true,
                    }))
                );
            })
            .catch((error) => {
                console.error("Error: Посты не найдены!", error);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        const query = event.target.value.toLowerCase();

        setPosts((prevPosts) =>
            prevPosts.map((post) => {
                const searchContent = post.title.toLowerCase() + post.text.toLowerCase();
                const isVisible = searchContent.includes(query);

                return { ...post, isVisible };
            })
        );
    };

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
                {posts.map((post) => (
                    <Post key={post.title} post={post} className={post.isVisible ? cl.added : cl.removed} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
