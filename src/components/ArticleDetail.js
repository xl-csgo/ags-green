import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Navbar from './Navbar';
import Footer from './footer';
import Hero from './career/CareerHero';
const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const bottomStyle = { display: 'none' };
    useEffect(() => {
        const fetchArticle = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/articles/${id}?populate=*`);
            console.log(response.data.data.thumbnail.url);
            setArticle(response.data.data.content);
            setHeading(response.data.data.title);
            setText(response.data.data.description);
            setImage(response.data.data.thumbnail.url);

          } catch (error) {
            console.error('Error fetching article:', error);
          }
        };
    
        fetchArticle();
      }, [id]);
    
      if (!article) {
        return <div>Loading...</div>;
      }      
    return ( 
      <div>
        <Navbar />
        <Hero heading={heading} background={image} text={text} bottomStyle={bottomStyle} />
        <div className="article-content">
            <BlocksRenderer content={article} />
        </div>
        <Footer />
      </div>
     );
}
 
export default ArticleDetail;