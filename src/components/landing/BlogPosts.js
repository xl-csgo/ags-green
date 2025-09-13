import React, { useEffect, useState } from 'react';
import './BlogPosts.css';
import Rhombus from '../../assets/rhombus.svg';
import BlogCard from './BlogCard';
import axios from 'axios';


const BlogPosts = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pagination, setPagination] = useState({});

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles?fields[0]=title&fields[1]=description&fields[2]=documentId&fields[3]=redirect&populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=3`);
                setArticles(response.data.data);
                setPagination(response.data.meta.pagination);
                setTotalPages(response.data.meta.pagination.pageCount);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setError('Failed to load articles');
                setLoading(false);
            }
        };

        fetchArticles();
    }, [currentPage]);

    if (loading) {
        return (
            <div className="blog-posts">
                <img src={Rhombus} alt="rhombus" className="rhombus" />
                <h1 className='blog-posts-title'>Latest in <span className='blog-highlight'>Solar</span> Energy</h1>
                <div className="loading">Loading articles...</div>
                <div className='spacer' />
                <img src={Rhombus} alt="rhombus" className="rhombus" /> 
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-posts">
                <img src={Rhombus} alt="rhombus" className="rhombus" />
                <h1 className='blog-posts-title'>Latest in <span className='blog-highlight'>Solar</span> Energy</h1>
                <div className="error">{error}</div>
                <div className='spacer' />
                <img src={Rhombus} alt="rhombus" className="rhombus" /> 
            </div>
        );
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="blog-posts">
            <img src={Rhombus} alt="rhombus" className="rhombus" />
            <h1 className='blog-posts-title'>Latest in <span className='blog-highlight'>Solar</span> Energy</h1>
            {articles.map((article) => (
                <BlogCard 
                    key={article.documentId}
                    article={article}
                />
            ))}
            
            {totalPages > 1 && (
                <div className="pagination-controls">
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className="pagination-btn prev-btn"
                    >
                        ← Previous
                    </button>
                    
                    <div className="page-numbers">
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNum = index + 1;
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`page-number-btn ${currentPage === pageNum ? 'active' : ''}`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>
                    
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        className="pagination-btn next-btn"
                    >
                        Next →
                    </button>
                </div>
            )}
            
            <div className='spacer' />
            <img src={Rhombus} alt="rhombus" className="rhombus" /> 
        </div>
    );
};

export default BlogPosts;
