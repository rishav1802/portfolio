import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p> Integrated Post Graduate from Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior. My parents live in Patna and I live in delhi. My current address is flat 9, property 95, Saidulajab near pir baba mandir, Westend marg, Landmark: Saket metro gate 2, 110030. </p>
                    <p> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3> Self Learning Software Development projects </h3>
                    <p> For the Front-End or client I have worked on projects with Html, Css, React, for the backend or server side I have worked on NodeJS, JavaScript, Express, Python, Flask and Serverless, for database I have used MongoDB atlas, Sqlite. I have developed projects using the MERN Stack and I have a hunger to learn more about fullstack development.
                     . I refer to stackOverflow if i have to know about an issue.</p>
                    <p></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures</h3>
                    <p>Graduated in  Computer Science and Information Technology background, I have good grasp over fundamental concepts of Data Structures and Algorithm concepts. I am proficient at Coding in C++. I practice coding on Spoj, HackerRank, Interviewbit, HAckerEarth, Leetcode, GeeksforGeeks . </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Research and Development at IIIT Gwalior</h3>
                    <p> For my MTech project I did my research thesis on Deep Dream, a computer generated art form. It uses deep learning to produce halucogenic effects on a given image. In layman terms we can think about it like
                        staring at clouds and seeing patterns or images, a phenomenon known as ’Pareidolia’.        I did my Btech research thesis on a fingerprint based Gender detection. It involved using sensors for fingerprint collection, Matlab for processing the dataset and extracting significant fingerprint features(minutiae patterns) from the fingerprint. Finally i used Image Processing, OpenCV and machine learning for predicting gender of a person based on the fingerprint. 
                    </p>  
                      
                </div>
                    
                    
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            // */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
