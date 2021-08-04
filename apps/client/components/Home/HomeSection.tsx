import React, { ReactElement, useEffect, useState } from 'react';
import classes from './HomeSection.module.css';
import Image from 'next/image';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';

function HomeSection(): ReactElement {
  // const [prevOffset, setPrevOffset] = useState(0);
  // const [fixedContactBtn, setFixedContactBtn] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.onscroll = () => {
  //       let currentScrollPos = window.pageYOffset;
  //       setPrevOffset(currentScrollPos);
  //       if (prevOffset >= 592) {
  //         setFixedContactBtn(true);
  //       } else {
  //         setFixedContactBtn(false);
  //       }
  //     };
  //   }
  // }, [prevOffset]);
  return (
    <section className={classes.home} id="home">
      <div className={classes.intro}>
        <Image
          src="/images/avatar-1.jpeg"
          alt="Arman Zahedi"
          width="120"
          height="120"
          className="avatar"
        />
        <h1>Arman Zahedi</h1>
        <span>
          I{`'`}m a{' '}
          <ReactTypingEffect
            text={[
              'Front-End developer',
              'Back-End developer',
              'UI/UX designer',
            ]}
            speed={120}
            eraseSpeed={50}
            eraseDelay={500}
            typingDelay={200}
          />
        </span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+989921744820"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://t.me/armanzdii">
              <i className="fab fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="mailto:armanzdii@gmail.com">
              <i className="fas fa-at"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/armanzahedi"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <a href="tel:+989921744820" className={`contactBtn`}>
          Contact Me
        </a>
      </div>
      <div className={classes.scrollDown}>
        <Link
          to="about"
          className={classes.mouseWrapper}
          spy={true}
          smooth={true}
        >
          <span>Scroll Down</span>
          <span className={classes.mouse}>
            <span className={classes.wheel}></span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default HomeSection;
