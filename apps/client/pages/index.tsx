import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import HomeSection from '../components/Home/HomeSection';
import SideNav from '../components/Layout/SideNav/SideNav';
import PerfectScrollbar from 'react-perfect-scrollbar';
import About from '../components/About/About';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import GithubCorner from 'react-github-corner';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Arman Zahedi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I'm a software developer experienced in React, Nextjs, flutter, Typescript, Node.js, Python. expert in .Net stack, C#, Sql Server. currently intested in blockchain development."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
          integrity="sha512-QKC1UZ/ZHNgFzVKSAhV5v5j73eeL9EEN289eKAEFaAjgAiobVAnVv/AGuPbXsKl1dNoel3kNr6PYnSiTzVVBCw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/duotone.css"
          integrity="sha384-R3QzTxyukP03CMqKFe0ssp5wUvBPEyy9ZspCB+Y01fEjhMwcXixTyeot+S40+AjZ"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css"
          integrity="sha256-raGUlaaCI4l2GoQ6cxLH8ODuDTwuQVL9RU06sSvpD6w="
          crossOrigin="anonymous"
        />
      </Head>
      <SideNav />
      <main>
        <HomeSection />
        <About />
        <ServicesSection />
        <ExperienceSection />
      </main>
      <GithubCorner
        href="https://github.com/armanzahedi"
        bannerColor="#444264"
        octoColor="#F6F6FF"
        target="_blank"
      />
    </Fragment>
  );
}
