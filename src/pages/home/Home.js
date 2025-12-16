import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import Card from '../../component/card/Card';
import Navbar from '../../component/navbar/Navbar';
import './Home.css'
import axios from 'axios';

const CarsShow = (info) => {
    if (!info || !Array.isArray(info)) {
        return <h1>Loading...</h1>;
    }
    return (
        info.map(data => (<Card key={data.id} data={data} />))
    )
}

const Home = () => {
    const location = useLocation();
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Extract category from pathname (remove leading slash)
    const category = location.pathname.substring(1) || 'javascript';

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        axios.get("https://raw.githubusercontent.com/mostafa-sultan/slums/refs/heads/main/data/images/md/data.json")
            .then(function (response) {
                if (response.data && response.data[0] && response.data[0].category) {
                    const categoryData = response.data[0].category[category];
                    setCardData(categoryData || []);
                } else {
                    setError('Invalid data format');
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load content. Please try again later.');
                setLoading(false);
            });
    }, [category]);
    return (
        <>
            <Navbar />
            <section className="section">
                <div className="container">
                    <div className="cover-image-wrapper">
                        <img 
                            className="cover-image" 
                            src="/cover.png" 
                            alt="Blog Cover" 
                        />
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                    <CategoryFilter currentCategory={category} />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h1 className="section-heading">Explore My Technical Articles</h1>
                    <div className="row">
                        {loading && <div className="col-12 text-center"><h2>Loading...</h2></div>}
                        {error && <div className="col-12 text-center"><h3 className="error-message">{error}</h3></div>}
                        {!loading && !error && cardData && Array.isArray(cardData) && cardData.length > 0 && CarsShow(cardData)}
                        {!loading && !error && cardData && Array.isArray(cardData) && cardData.length === 0 && (
                            <div className="col-12 text-center">
                                <h3>No articles found in this category.</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
const CategoryFilter = ({ currentCategory }) => {
    const categories = [
        { path: '/javascript', label: 'JavaScript' },
        { path: '/nodejs', label: 'Node.js' },
        { path: '/react', label: 'React.js' },
        { path: '/reactnative', label: 'React Native' },
        { path: '/database', label: 'Database' },
        { path: '/algorithms', label: 'Data Structures & Algorithms' },
        { path: '/software', label: 'Software Topics' }
    ];

    return (
        <>
            {categories.map((cat) => (
                <li key={cat.path}>
                    <Link 
                        className={`categories ${currentCategory === cat.path.substring(1) ? 'active' : ''}`} 
                        to={cat.path}
                    >
                        {cat.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default Home;
