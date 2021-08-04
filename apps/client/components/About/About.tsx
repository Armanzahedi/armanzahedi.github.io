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
                <div className="col-md-7">
                  <p style={{ textAlign: 'justify' }}>
                    Self taught Full-Stack Developer with 4+ years of experience
                    developing mainly web based solutions using ASP.NET , .NET
                    Core. Skilled in architecting and executing customized,
                    web-based solutions. Expertise in requirements design,
                    development, testing, maintenance enhancement, and
                    production support of business applications. Currently
                    interested in building full featured platforms using react
                    and blockchain technologies and developing new solutions for
                    worn processes.
                  </p>
                  <a href="#" className="contactBtn">
                    Download CV
                  </a>
                </div>
                <div className={`col-md-5 ${classes.progresses}`}>
                  <div>
                    <div className={classes.progressWrapper}>
                      <h4>Front-End development</h4>
                      <span>80%</span>
                    </div>
                    <ProgressBar
                      completed={80}
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
                  <div>
                    <div className={`${classes.progressWrapper} ${classes.pt}`}>
                      <h4>Mobile app development</h4>
                      <span>85%</span>
                    </div>
                    <ProgressBar
                      completed={85}
                      bgColor="#06d6a0"
                      isLabelVisible={false}
                      labelColor="#ffffff"
                      height="10px"
                    />
                  </div>
                  <div>
                    <div className={`${classes.progressWrapper} ${classes.pt}`}>
                      <h4>Blockchain development</h4>
                      <span>60%</span>
                    </div>
                    <ProgressBar
                      completed={60}
                      bgColor="#118ab2"
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
                      <span>25</span>
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
                      <span>20</span>
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
                      <span>22</span>
                    </em>
                  </h3>
                  <p className="mb-0">Years completed</p>
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
