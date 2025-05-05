import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const response = await axios.get('http://localhost:1337/api/articles?fields[0]=title&fields[1]=description&fields[2]=documentId&fields[3]=redirect&populate=*&sort=createdAt:desc');
            setArticles(response.data.data);
            console.log(response.data.data)
          } catch (error) {
            console.error('Error fetching articles:', error);
          }
        };
    
        fetchArticles();
      }, []);
    return ( 
        <div className="articles">
            <h1>Articles</h1>
            {articles.map((article) => (
                <div className="a">
                    <img
                        src={`http://localhost:1337${article.thumbnail.formats.thumbnail.url}`}
                        
                    />
                    {article.redirect == "none" || article.redirect == null?<Link to={`/article/${article.documentId}`}><h2>{article.title}</h2></Link>:<Link to={article.redirect}><h2>{article.title}</h2></Link>}
                    {/* <Link to={`/article/${article.documentId}`}>
                        <h2>{article.title}</h2>
                    </Link> */}
                    <p>{article.description}</p>
                </div>
                
            ))}
        </div>
     );
}
 
export default ArticlesList;