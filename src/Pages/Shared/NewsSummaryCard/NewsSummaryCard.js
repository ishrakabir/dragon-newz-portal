import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareNodes, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { author, title, _id, total_view, image_url, details, rating } = news
    console.log(news);
    return (
        <div>
            <Card className='mb-4'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <Image src={author?.img} style={{ height: '60px' }} roundedCircle />
                            </div>
                            <div className='mx-3'>
                                <strong >{author?.name}</strong>
                                <p className='font-italic'>{author?.published_date}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareNodes></FaShareNodes>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <h5>{title}</h5>
                    </Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}>Read more</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span >{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye className='me-2'></FaEye>
                        <span>{ total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;