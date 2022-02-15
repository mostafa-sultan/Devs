import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Card from '../../component/card/Card';
import Navbar from '../../component/navbar/Navbar';
import './Home.css'
// var data = require('https://raw.githubusercontent.com/mostafa-sultan/slums/main/data.json');
import axios from 'axios';

const CarsShow = (info) => {
    return (
        info.map(data => (<Card key={data.id} data={data} />))
    )
}

const Home = (props) => {
    const history = useNavigate();
    const params = useParams();
    const [cardData, setCardData] = useState(0);
    // const [cardData, setCardData] = useState(data[0].category[params.category]);

    useEffect(() => {
        // console.log(window.location.pathname.substring(1));
        axios.get("https://raw.githubusercontent.com/mostafa-sultan/slums/main/data/images/md/data.json")
            .then(function (response) {
                console.log(response.data);
                setCardData(response.data[0].category[window.location.pathname.substring(1)]);
            })
            .catch(function (error) {
                console.log(error);
            });
        // setCardData(data[0].category[params.category])
    }, [history]);
    return (
        <>
            <Navbar />
            <section className="section">
                <div className="container">
                    <img className="item-container " src="/cover.png" alt="work-img" width="100%" style={{ objectFit: 'cover', borderRadius: '30%', height: '200px ' }} />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                    {ActiveSec()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h1>do your best🙂</h1>
                    <div className="row">
                        {/* {cardData.map(data => (<Card key={data.id} data={data} />))} */}
                        {cardData ? CarsShow(cardData) : <h1>Loding ...</h1>}
                        {/* <Card name={"item"}/>
                        <Card />  */}


                    </div>
                </div>
            </section>




        </>
    );
}



const ActiveSec = () => {
    switch (window.location.pathname.substring(1)) {
        case "javascript":
            return (
                <>
                    <li><Link className="categories active" to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories" to="/react">ReactJs</Link></li>
                    <li><Link className="categories" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories" to="/database">Database </Link></li>
                    <li><Link className="categories" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories" to="/software">Software Randome Topics</Link></li>
                </>
            )

        case "nodejs":
            return (
                <>
                    <li><Link className="categories " to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories active" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories" to="/react">ReactJs</Link></li>
                    <li><Link className="categories" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories" to="/database">Database </Link></li>
                    <li><Link className="categories" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories" to="/software">Software Randome Topics</Link></li>
                </>
            )
        case "react":
            return (
                <>
                    <li><Link className="categories " to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories active" to="/react">ReactJs</Link></li>
                    <li><Link className="categories" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories" to="/database">Database </Link></li>
                    <li><Link className="categories" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories" to="/software">Software Randome Topics</Link></li>
                </>
            )
        case "reactnative":
            return (
                <>
                    <li><Link className="categories  " to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories" to="/react">ReactJs</Link></li>
                    <li><Link className="categories active" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories" to="/database">Database </Link></li>
                    <li><Link className="categories" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories" to="/software">Software Randome Topics</Link></li>
                </>
            )
        case "database":
            return (
                <>
                    <li><Link className="categories " to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories" to="/react">ReactJs</Link></li>
                    <li><Link className="categories" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories active" to="/database">Database </Link></li>
                    <li><Link className="categories" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories" to="/software">Software Randome Topics</Link></li>
                </>
            )
        case "algorithms":
            return (
                <>
                    <li><Link className="categories " to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories" to="/react">ReactJs</Link></li>
                    <li><Link className="categories" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories" to="/database">Database </Link></li>
                    <li><Link className="categories active" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories" to="/software">Software Randome Topics</Link></li>
                </>
            )
        case "software":
            return (
                <>
                    <li><Link className="categories " to="/javascript">JavaScript</Link></li>
                    <li><Link className="categories" to="/nodejs">NodeJs</Link></li>
                    <li><Link className="categories" to="/react">ReactJs</Link></li>
                    <li><Link className="categories" to="/reactnative">React Native</Link></li>
                    <li><Link className="categories" to="/database">Database </Link></li>
                    <li><Link className="categories" to="/algorithms">Data Structures&Algorithms</Link></li>
                    <li><Link className="categories active" to="/software">Software Randome Topics</Link></li>
                </>
            )

        default:
        // code block
    }


};
export default Home;
