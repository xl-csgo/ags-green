import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog_headline, blog_desc, blog_link, blog_image }) => {
    return (
        <div className="blog-card">
            <a href={blog_link} className="blog-card-link">
                <img src={blog_image} alt={blog_headline} className="blog-card-image" />
                <div className="blog-card-content">
                    <h2 className="blog-card-title">{blog_headline}</h2>
                    <p className="blog-card-desc">{blog_desc}</p>
                    <div className="blog-card-actions">
                        <span className="read-button">Read</span>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default BlogCard
