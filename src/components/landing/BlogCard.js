import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ article }) => {
    const imageUrl = article.thumbnail 
        ? `${process.env.REACT_APP_API_URL}${article.thumbnail.formats?.thumbnail?.url || article.thumbnail.url}`
        : null;
    
    const linkTo = (article.redirect === "none" || article.redirect === null || !article.redirect) 
        ? `/article/${article.documentId}` 
        : article.redirect;

    return (
        <div className="blog-card">
            <Link to={linkTo} className="blog-card-link">
                {imageUrl && (
                    <img src={imageUrl} alt={article.title} className="blog-card-image" />
                )}
                <div className="blog-card-content">
                    <h2 className="blog-card-title">{article.title}</h2>
                    <p className="blog-card-desc">{article.description}</p>
                    <div className="blog-card-actions">
                        <span className="read-button">Read</span>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default BlogCard
