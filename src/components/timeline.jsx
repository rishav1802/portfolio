import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Rakuten India <span>2021</span></h2>
                        <p> Worked as a Trainee Development engineer from July-November 2021. I analysed the issues using their testing/QA site called ATSSA.AI or Rakuten Sixth
                        Sense and worked on feature implementations and fixing bugs in frontend.
                          TechStack Used: React, Material UI, Javascript, ES6, HTML, Java, VSCode, IntelliJ IDEA  </p>
                                                </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>M.Tech at IIIT-Gwl <span>2020-2021</span></h2>
                        <p> I did my Integrated Mtech undertaking courses like Game Theory and Internet Of Things. For my MTech project I did my research thesis on Deep Dream, a computer generated art form. It uses deep learning to produce halucogenic effects on a given image. In layman terms we can think about it like
                        staring at clouds and seeing patterns or images, a phenomenon known as ’Pareidolia’. DeepDream
                        does the same thing by enhancing patterns it sees in a given image based on what it has been
                        trained to see in the past. I studied the effects of activating different layers of CNN on a given image. I developed an api for the same which takes in an image as input and generates the dreamified output image.  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Participated in GSOC 2020 under AOSSIE  <span>2020</span></h2>
                        <p> I proposed to add a functionality for detecting NSFW Images to the existing Social Street Smart porject extension and fixed minor bugs and made pull request for the same. A chrome extension for detecting and blurring out NSFW Images which
                        fetches information from a rest-api, serving prediction of a trained
                        InceptionV3 model. I researched under a GSOC umbrella organisation AOSSIE in the summer of 2020. The problems faced by the people browsing on the internet have  increased . These include abusive languages, fake news articles, click-baits, malicious websites and security attacks. Social Street Smart is a chrome extension which aims at making Internet a safer and more productive service for the users. The chrome extension uses different Api's for detecting the above mentioned problems. I worked with python, Javascript and restAPI, Html, Css .
                        TechStack used: Javascript, Html, Css, Python3,
                        TensorFlow-Lite , Flask, Swagger, Pytest  </p>
                                                </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Gate CS<span>2020</span></h2>
                        <p> Qualified Gate 2020 in Computer Science (CS) with marks: 42 / 100 and rank: 3285  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.Tech at IIIT-Gwl <span>2016-2020</span></h2>
                        <p> I have worked with machine learning, Self learning projects on and have undertaken courses like Object Oriented Programing , Data Strucures and Algorithm, Internet Of Things, Computer Networks, Artificial Intelligence, DataBase Management System, System Analysis and Design and have good grasp over these subjects. I did my Btech research thesis on a novel approach to Gender detection using Fingerprint. It involved using sensors for fingerprint collection, Matlab for processing the dataset and extracting significant fingerprint features(minutiae patterns) from the fingerprint. Finally i used Image Processing, OpenCV and machine learning for predicting gender of a person based on the fingerprint. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education from Delhi Public School, Ranchi with Physics,Chemistry & Maths and CS in c++ as extra with 91 percentage.  <br />  I completed my Primary Education in Science, Maths, Computers including Java and C++ language, literature in Hindi, English and basics of Sanskrit from St. Thomas, Ranchi, an ICSE School, St. Thomas Ranchi with 94.2 percentage.  </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
