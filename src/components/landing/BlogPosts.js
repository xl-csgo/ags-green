import React from 'react';
import './BlogPosts.css';
import Rhombus from '../../assets/rhombus.svg';
import BlogCard from './BlogCard';
import bg1 from '../../assets/blog1.png';
import bg2 from '../../assets/blog2.png';
import bg3 from '../../assets/blog3.png';


const BlogPosts = () => {
    const blog_headline1 = 'The Future of solar rooftop solutions';
    const blog_desc1 = 'As the world races towards cleaner energy, solar rooftops are emerging as a cornerstone of sustainable living. What was once an expensive, niche option is now transforming into a mainstream solution—driven by falling panel costs, government incentives, and innovative technologies.'
    const blog_link1 = '/#'
    const blog_image1 = bg1

    const blog_headline2 = 'Solar Parks: Powering Industries'
    const blog_desc2 = 'As the world races towards cleaner energy, solar rooftops are emerging as a cornerstone of sustainable living. What was once an expensive, niche option is now transforming into a mainstream solution—driven by falling panel costs, government incentives, and innovative technologies.'
    const blog_link2 = '/#'
    const blog_image2 = bg2

    const blog_headline3 = 'Why O&M matters for solar plants?'
    const blog_desc3 = 'As the world shifts towards renewable energy, the importance of Operations and Maintenance (O&M) for solar plants cannot be overstated. Effective O&M practices ensure optimal performance, longevity, and reliability of solar assets, ultimately driving down costs and enhancing energy output.'
    const blog_link3 = '/#'
    const blog_image3 = bg3

    return (
        <div className="blog-posts">
            <img src={Rhombus} alt="rhombus" className="rhombus" />
            <h1 className='blog-posts-title'>Latest in <span className='blog-highlight'>Solar</span> Energy</h1>
            <BlogCard blog_headline={blog_headline1} blog_desc={blog_desc1} blog_link={blog_link1} blog_image={blog_image1} />
            <BlogCard blog_headline={blog_headline2} blog_desc={blog_desc2} blog_link={blog_link2} blog_image={blog_image2} />
            <BlogCard blog_headline={blog_headline3} blog_desc={blog_desc3} blog_link={blog_link3} blog_image={blog_image3} />
            <div className='spacer' />
            <img src={Rhombus} alt="rhombus" className="rhombus" /> 
        </div>
    );
};

export default BlogPosts;
