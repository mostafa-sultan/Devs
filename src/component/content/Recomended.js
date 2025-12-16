import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recomended = () => {
    const [recommendedArticles, setRecommendedArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/mostafa-sultan/slums/refs/heads/main/data/images/md/data.json")
            .then(function (response) {
                if (response.data && response.data[0] && response.data[0].category) {
                    const categories = response.data[0].category;
                    const allArticles = [];
                    
                
                    Object.keys(categories).forEach(categoryKey => {
                        if (Array.isArray(categories[categoryKey])) {
                            categories[categoryKey].forEach(article => {
                                allArticles.push(article);
                            });
                        }
                    });
                    
              
                    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
                    const selected = shuffled.slice(0, 7);
                    setRecommendedArticles(selected);
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.error('Error fetching recommended articles:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <h4 className="fst-italic">Recomended</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Loading...</p>
            </>
        );
    }

    if (recommendedArticles.length === 0) {
        return (
            <>
                <h4 className="fst-italic">Recomended</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>No articles available</p>
            </>
        );
    }

    return (
        <>
            <h4 className="fst-italic">Recomended</h4>
            <ol className="list-unstyled mb-0"> 
                {recommendedArticles.map((article) => (
                    <li key={article.id} style={{ marginBottom: '0.5rem' }}>
                        <Link 
                            to={article.contentLink || '#'}
                            style={{ 
                                textDecoration: 'none',
                                color: '#667eea',
                                fontSize: '0.95rem',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#764ba2'}
                            onMouseLeave={(e) => e.target.style.color = '#667eea'}
                        >
                            {article.titel || 'Untitled Article'}
                        </Link>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default Recomended;
