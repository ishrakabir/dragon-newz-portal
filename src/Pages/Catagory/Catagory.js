import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const catagory = useLoaderData();
    return (
        <div>
            {
                catagory.map(news => <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;