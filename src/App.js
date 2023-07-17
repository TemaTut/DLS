import { useState } from "react";
import React from "react";

import "./styles/main.css";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Nav from "./components/Nav/Nav";

function App() {
    const [inputOverflow, setInputOverflow] = useState("hidden");
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearchButtonClick = () => {
        setIsSearchVisible((prevState) => !prevState);
        setInputOverflow(isSearchVisible ? "hidden" : "visible");
    };

    return (
        <div className="root">
            <Header onSearchButtonClick={handleSearchButtonClick} />
            <Nav />
            <Posts inputOverflow={inputOverflow} />
        </div>
    );
}

export default App;
