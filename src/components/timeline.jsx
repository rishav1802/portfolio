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
                        <h2>M.Tech at IIIT-Gwl <span>2020-2021</span></h2>
                        <p> I did my Integrated Mtech undertaking courses like IOT. For my MTech project I did my research thesis on Deep Dream, a computer generated art form. It uses deep learning to produce halucogenic effects on a given image. I studied the effects of activating different layers of CNN on a given image. I developed an api for the same which takes in the image as input and generates the dreamified output image.  </p>
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
                        <p>I am currently in my final year of the IPG Course and during my course projects I have worked with machine learning, OpenSource projects and have undertaken courses like Oops, Data Strucures, IOT, Computer Networks Artificial Intelligence, DataBase Management System, System Analysis and Design and have good grasp over these subjects. I have done competitive coding on sites like Codechef, Leetcode, Spoj, Hackerrank, hackerearth, Interviewbit. I did my Btech research thesis on a novel approach to Gender detection using Fingerprint. It involved using IOT for fingerprint collection, Matlab for processing the dataset and extracting significant minutiae features from the fingerprint. Finally i used Image Processing, OpenCv and machine learning for predicting gender of a person based on the fingerprint. </p>
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
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths and CS in c++ as extra with 91 percentage. During my time at school, I have developed interest in solving complex problems of mathematics including Permutation and Combination, Aptitude and Reasoning. <br />  I completed my Primary Education from an ICSE School, St. Thomas Ranchi with 94.2 percentage.  </p> 
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
