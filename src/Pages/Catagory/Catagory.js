import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';
import useTitle from '../../Hooks/useTitle';

const Catagory = () => {
    const catagory = useLoaderData();

    useTitle("Catagory");
    return (
        <div>
            <h4 className='text-center mb-4'>This Catagory has {catagory.length} news</h4>
            {
                catagory.map(news => <NewsSummaryCard news={news} key={news._id}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;