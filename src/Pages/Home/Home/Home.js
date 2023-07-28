import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    const allNews = useLoaderData();
    useTitle("Home");
    return (
        <div>
            <h1>Dragon News Home : {allNews.length}</h1>
            {
                allNews.map(news => <NewsSummaryCard news={news} key={news.id}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;