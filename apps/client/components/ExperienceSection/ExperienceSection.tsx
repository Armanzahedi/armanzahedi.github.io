import React, { ReactElement } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import FadeInSection from '../FadeInSection';
import { useTheme } from 'next-themes';

function ExperienceSection(): ReactElement {
  const { theme } = useTheme();

  return (
    <section id="experience">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Experience</h2>
        </FadeInSection>
        <div className="spacer" data-height="60"></div>
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            contentStyle={{
              background: theme === 'light' ? '#fff' : '#302F4E',
              color: theme === 'light' ? '#302F4E' : '#fff',
              borderRadius: '5px',
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${
                theme === 'light' ? '#fff' : '#302F4E'
              }`,
            }}
            date="September 2020 - present"
            iconStyle={{ background: '#FF4C60', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior .NET Developer / Team lead
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Spad IT</h4>
            <p style={{ textAlign: 'justify' }}>
              Designed and developed 20+ web applications for various type of
              use cases such as corporate, ecommerce, marketplace and referral
              marketing systems.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Maintained and developed new features in existing applications
              Identified plans and resources required to meet project goals and
              objectives.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Designed and maintained integrated requirement traceability
              matrices to verify development performance consistency across
              teams and projects.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Managed team of 20+ employees, overseeing hiring, training, and
              professional growth of employees.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Mentored and guided employees to foster proper completion of
              assigned duties.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Planned and developed interfaces using .Net framework that
              simplified overall management and offered ease-of-use. Managed
              development milestones from initial steps through final delivery.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Investigated new and emerging software applications within
              development Industry to design, select, implement and use
              administrative systems effectively.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Designed and developed full featured reusable content management
              systems for various type of projects such as ecommerce, corporate
              and marketplace web applications.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Defined project-wide performance metrics such as developmental
              milestones, timeline goals and required completion dates.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: theme === 'light' ? '#fff' : '#302F4E',
              color: theme === 'light' ? '#302F4E' : '#fff',
              borderRadius: '5px',
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${
                theme === 'light' ? '#fff' : '#302F4E'
              }`,
            }}
            date="August 2019 - July 2020"
            iconStyle={{ background: '#FF4C60', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Ofogh IT</h4>
            <p style={{ textAlign: 'justify' }}>
              Designed and developed a full featured tourism platform and full
              automated the tour holding process for Star Travel Co travel
              agency. Designed and developed PWA applications for registered
              tourists and tour leaders. Desined and developed varius reporting
              systems such as application usage, tour profit and loss reports
              and tour leader performance reports for the client using
              StimulsoftReports.Net.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Designed and developed parspalad.com website and a full featured
              content management system for parspalad travel agency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: theme === 'light' ? '#fff' : '#302F4E',
              color: theme === 'light' ? '#302F4E' : '#fff',
              borderRadius: '5px',
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${
                theme === 'light' ? '#fff' : '#302F4E'
              }`,
            }}
            date="April 2018 - July 2019"
            iconStyle={{ background: '#FF4C60', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
            <p style={{ textAlign: 'justify' }}>
              Designed and developed warehousing and warehouse billing system
              for Arad bar nariman bandar transportation company.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Designed and developed queuing and billing system for Fereydoon
              bar bandar loading complex.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default ExperienceSection;
