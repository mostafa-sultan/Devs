import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import './About.css'

const About = () => {
  return (
    <div>
      <Navbar />

      <br /> <br /> <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="mb-2">
              <img className="w-100" src="/pic.jpg" alt />
            </div>
            <div className="mb-2 d-flex">
              <h4 className="font-weight-normal">Mostafa Sultan</h4>
            </div>
            <div className="mb-2">
              <ul className="list-unstyled">
                <li className="media">
                  <span className="w-25 text-black font-weight-normal">Profession:</span>
                  <label className="media-body">software engineer</label>
                </li>
                <li className="media">
                  <span className="w-25 text-black font-weight-normal">Email: </span>
                  <label className="media-body">mostafasolatn82@gmail.com</label>
                </li>
                <li className="media">
                  <span className="w-25 text-black font-weight-normal">Location: </span>
                  <label className="media-body">Cairo / Egypt</label>
                </li>
                <li className="media">
                  <span className="w-25 text-black font-weight-normal">Linkedin: </span>
                  <label className="media-body"><a href="https://www.linkedin.com/in/mostafa-sultan/" target="_blank">Mostafa Sultan</a></label>
                </li>
                <li className="media">
                  <span className="w-25 text-black font-weight-normal">GitHub: </span>
                  <label className="media-body"><a href="https://github.com/mostafa-sultan/" target="_blank">Mostafa Sultan</a></label>
                </li>
                <li className="media">
                  <span className="w-25 text-black font-weight-normal">Googele play: </span>
                  <label className="media-body"><a href="https://play.google.com/store/apps/developer?id=Mostafa+Soltan" target="_blank">Mostafa Sultan</a></label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 pl-xl-3">
            <h5 className="font-weight-normal">Summary</h5>
            <p>
              I'm a full stack developer with more than 1 year of experience.<br />
              Studying computer science in faculty of computers and information.<br />
              I work mainly with javascript stack and love writing code with python and java.<br />
              Publish NPM packages here<br />
              Publish apps in Google play here<br />
              Publish technical articles on this blog<br />
              Make tech videos on my YouTube channel Devs<br />
            </p>

            <h5 className="font-weight-normal">Experience</h5>
            <hr />
            <h6>Phantom Technologies</h6>
            <p>
              Make e-commerce bots automate process on the internet
              tech stack (Node js – Express - Java - Okhttp - web scraping - Mongo - Playwright – Automation -reactjs )
            </p>
            <hr />
            <h6>MegaAnalytics (intern)</h6>
            <p>
              Implemented some tasks like authentication with jwt ,some services based on crud operation with
              javascript & php &Laravel & mysql & mongodb , panel to management a website and manage posts
              and users
            </p>
            <hr />
            <h6>iti (intern)</h6>
            <p>
              Summer training in iti menoufia branche get 120 credit hour (javascript-php-laravel-html-css)
              certificat
            </p>
            <hr />
            <h5 className="font-weight-normal">Projects</h5>
            <hr />
            <h6>Email system nodejs </h6>
            <p>
              Email system like gmail yahoo .<br />
              Stack.(node.js - express js - ejs - javascript - mongose - html - css - multer - passport js)<br />
              Features:
              (login - registration - send email with attached fiel - downlode attached file with email - replay the email)<br />
            </p>
            <hr />
            <h6>Face recognition system  </h6>
            <p>
              Implementation of face recognition server as Rest api by transflow and face api
            </p>
            <div className="mb-2 mt-2 pt-1">
              <h5 className="font-weight-normal">Skill</h5>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">JavaScript</div>
                  <span className="progress-bar-number">85%</span>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">Node Js</div>
                  <span className="progress-bar-number">75%</span>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '77%' }} aria-valuenow={77} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">react</div>
                  <span className="progress-bar-number">77%</span>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">Data Structures </div>
                  <span className="progress-bar-number">65%</span>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">Databases</div>
                  <span className="progress-bar-number">65%</span>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '77%' }} aria-valuenow={77} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">Backend Development</div>
                  <span className="progress-bar-number">77%</span>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar-title">Frontend Development</div>
                  <span className="progress-bar-number">65%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default About;
