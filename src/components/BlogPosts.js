import React from 'react';
import './BlogPosts.css';
import Rhombus from '../assets/rhombus.svg';
import BlogCard from './BlogCard';
import bg from '../assets/blog.png';


const BlogPosts = () => {
    const blog_headline = 'The Future of solar rooftop solutions';
    const blog_desc = 'As the world races towards cleaner energy, solar rooftops are emerging as a cornerstone of sustainable living. What was once an expensive, niche option is now transforming into a mainstream solution—driven by falling panel costs, government incentives, and innovative technologies.'
    const blog_link = '/blog/1'
    const blog_image = bg

    return (
        <div className="blog-posts">
            <img src={Rhombus} alt="rhombus" className="rhombus" />
            <h1 className='blog-posts-title'>Latest in <span className='highlight'>Solar</span> Energy</h1>
            <BlogCard blog_headline={blog_headline} blog_desc={blog_desc} blog_link={blog_link} blog_image={blog_image} />
            <BlogCard blog_headline={blog_headline} blog_desc={blog_desc} blog_link={blog_link} blog_image={blog_image} />
            <BlogCard blog_headline={blog_headline} blog_desc={blog_desc} blog_link={blog_link} blog_image={blog_image} />
            <div className='spacer' />
            <img src={Rhombus} alt="rhombus" className="rhombus" /> 
        </div>
    );
};

export default BlogPosts;