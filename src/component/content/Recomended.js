import React from 'react';
import { Link } from 'react-router-dom';

const Recomended = () => {
    return (
        <>
            <h4 className="fst-italic">Recomended</h4>
            <ol className="list-unstyled mb-0"> 
                <li><Link to="/tutorial/reactnativeui.md">advanced ui react native</Link></li>
                <li><Link to="/tutorial/Recommendersystem.md">simple movies Recommender system</Link></li>
                <li><Link to="/tutorial/domvsbom.md">Dom Vs Bom</Link></li>
                <li><Link to="/tutorial/oop.md">oop</Link></li>
                <li><Link to="/tutorial/python.md">python</Link></li>
                <li><Link to="/tutorial/Expressjs.md">Express.js</Link></li>
                <li><Link to="/tutorial/mongodb.md">mongodb</Link></li>
            </ol>
        </>
    );
}

export default Recomended;
