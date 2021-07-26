import React, { useRef, ReactElement } from 'react';
import FadeInSection from '../FadeInSection';
import classes from './About.module.css';
import Image from 'next/image';
import ProgressBar from '@ramonak/react-progress-bar';

function About(): ReactElement {
  return (
    <section className={`${classes.about}`} id="about">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">About Me</h2>
        </FadeInSection>
        <div className="spacer" data-height="60"></div>
        <div className="row">
          <div className="col-md-3">
            <div className={classes.imageContainer}>
              <Image
                src="/images/avatar-1.jpeg"
                alt="Arman Zahedi"
                width="170"
                height="170"
                className="avatar"
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>
          <div className={`col-md-9 ${classes.card}`}>
            <div className={classes.cardContent}>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    I am Bolby Doe, web developer from London, United Kingdom. I
                    have rich experience in web site design and building and
                    customization, also I am good at WordPress.
                  </p>
                  <a href="" className="contactBtn">
                    Download CV
                  </a>
                </div>
                <div className={`col-md-6 ${classes.progresses}`}>
                  <div>
                    <div className={classes.progressWrapper}>
                      <h4>Front-End development</h4>
                      <span>85%</span>
                    </div>
                    <ProgressBar
                      completed={85}
                      bgColor="#ffd15c"
                      isLabelVisible={false}
                      labelColor="#ffffff"
                      height="10px"
                    />
                  </div>
                  <div>
                    <div className={`${classes.progressWrapper} ${classes.pt}`}>
                      <h4>Back-End development</h4>
                      <span>95%</span>
                    </div>
                    <ProgressBar
                      completed={95}
                      bgColor="#FF4C60"
                      isLabelVisible={false}
                      labelColor="#ffffff"
                      height="10px"
                    />
                  </div>
                  <div>
                    <div className={`${classes.progressWrapper} ${classes.pt}`}>
                      <h4>UI/UX Design</h4>
                      <span>70%</span>
                    </div>
                    <ProgressBar
                      completed={70}
                      bgColor="rgb(167 162 255)"
                      isLabelVisible={false}
                      labelColor="#ffffff"
                      height="10px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="60"></div>
        <div className={`row fixSpacing`}>
          <div className="col-md-3 col-sm-6">
            <div>
              <div className={classes.faceItem}>
                <i className="icon icon-fire"></i>
                <div className={classes.details}>
                  <h3 className={`mb-0 mt-0 ${classes.number}`}>
                    <em className="count">
                      <span>198</span>
                    </em>
                  </h3>
                  <p className="mb-0">Projects completed</p>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-3 col-sm-6">
            <div>
              <div className={classes.faceItem}>
                <i className="icon icon-cup"></i>
                <div className={classes.details}>
                  <h3 className={`mb-0 mt-0 ${classes.number}`}>
                    <em className="count">
                      <span>5670</span>
                    </em>
                  </h3>
                  <p className="mb-0">Cup of coffee</p>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-3 col-sm-6">
            <div>
              <div className={classes.faceItem}>
                <i className="icon icon-people"></i>
                <div className={classes.details}>
                  <h3 className={`mb-0 mt-0 ${classes.number}`}>
                    <em className="count">
                      <span>427</span>
                    </em>
                  </h3>
                  <p className="mb-0">Satisfied clients</p>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-3 col-sm-6">
            <div>
              <div className={classes.faceItem}>
                <i className="icon icon-badge"></i>
                <div className={classes.details}>
                  <h3 className={`mb-0 mt-0 ${classes.number}`}>
                    <em className="count">
                      <span>35</span>
                    </em>
                  </h3>
                  <p className="mb-0">Nominees winner</p>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
    </section>
  );
}

export default About;
