import React, { ReactElement } from 'react';
import FadeInSection from '../FadeInSection';
import classes from './ServicesSection.module.css';
import Image from 'next/image';

function ServicesSection(): ReactElement {
  return (
    <section id="services">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Services</h2>
        </FadeInSection>
        <div className="spacer" data-height="60"></div>
        <div className="row fixSpacing">
          <div className="col-md-4">
            <div
              className={classes.serviceBox}
              style={{
                background: '#6C6CE5',
                boxShadow: 'rgb(108 108 229 / 50%) 0px 5px 20px 0px',
              }}
            >
              <Image
                src="/images/service-1.svg"
                alt="UI/UX design"
                width="80"
                height="80"
              />
              <h3 className="mb-3 mt-2">UI/UX design</h3>
              <p className="mb-0">
                Experienced in designing and prototyping web and mobile
                applications mainly using figma.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={classes.serviceBox}
              style={{
                background: 'rgb(249, 215, 76)',
                boxShadow: 'rgb(249 215 76 / 50%) 0px 5px 20px 0px',
              }}
            >
              <Image
                src="/images/service-2.svg"
                alt="Web Development"
                width="80"
                height="80"
              />
              <h3 className="mb-3 mt-2">Web Development</h3>
              <p className="mb-0">
                Expert in developing web based solutions ( APIs and websites )
                using .Net stack and/or nodejs.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={classes.serviceBox}
              style={{
                background: 'rgb(249, 123, 139)',
                boxShadow: 'rgb(249 123 139 / 50%) 0px 5px 20px 0px',
              }}
            >
              <Image
                src="/images/service-3.png"
                alt="App Development"
                width="80"
                height="80"
              />
              <h3 className="mb-3 mt-2">Mobile app Development</h3>
              <p className="mb-0">
                Experienced in developing cross-platform mobile apps (for
                android, ios and web) using flutter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
