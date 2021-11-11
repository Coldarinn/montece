import React from 'react';
import Aside from "../components/Aside";
import NewsList from "../components/NewsList";

const News = () => {
    return (
        <div className="news">
            <div className="container">
                <div className="news__body">
                    <NewsList/>
                    <Aside/>
                </div>
            </div>
        </div>
    );
};

export default News;