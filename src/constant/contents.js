import React from "react";
import Typing from "react-typing-animation";

export const homeContent = (
  <React.Fragment>
    <p>Our digital workforce will save you time and money.</p>
    <p>Helping you grow and improve customer experience</p>
  </React.Fragment>
);

const NormalCursor = () => {
  return (
    <span className="normal-cursor">&#9475;&#9475;&#9475;&#9475;&#9475;</span>
  );
};

export const typing = (
  <Typing
    className="typing-area"
    speed={60}
    startDelay={3500}
    cursor={<NormalCursor />}
  >
    <span>Is your business ready for the future of work?</span>
  </Typing>
);

export const afterTyping = (
  <span>
    Is your business ready for the future of work?
    <span className="cursor">&#9475;&#9475;&#9475;&#9475;&#9475;</span>
  </span>
);

export const homeContent2 = [
  {
    index: 1,
    title: "Get Happier Customers",
    desc: (
      <p>
        Increase service speeds in your business and let your teams enjoy time
        to focus on amazing customer service rather than completing tasks.
      </p>
    ),
  },
  {
    index: 2,
    title: "Stay Compliant",
    desc: (
      <p>
        Low touch, zero error processes with exception handling, constant audit
        and reporting keeps your quality on track and regulatory demands
        simplified.
      </p>
    ),
  },
  {
    index: 3,
    title: "Maximise Employee Impact",
    desc: (
      <p>
        Let robotic process automation and AI do the heavy lifting so your teams
        can focus on high value work and strategic outcomes.
      </p>
    ),
  },
  {
    index: 4,
    title: "Save Time & Money",
    desc: (
      <p>
        Streamline your business processes and improve efficiency. Reduce
        repetition and speed up labourious tasks.
      </p>
    ),
  },
];

export const companyContent = [
  {
    index: 1,
    id: "origin",
    title: "Origin",
    mainDesc: (
      <p>
        Founder James Nicolson recognised an enormous opportunity to augment
        business operating models. Automation and Artificial Intelligence (AI)
        are transforming large enterprises at speed to solve business
        challenges. Intelligent Automation was almost exclusively serving large
        multi-national companies who could justify the significant investments
        in technology and people necessary to implement them. Roxus set out to
        change this paradigm.
      </p>
    ),
    fullDesc: (
      <React.Fragment>
        <p>
          Founder James Nicolson recognised an enormous opportunity to augment
          business operating models. Automation and Artificial Intelligence (AI)
          are transforming large enterprises at speed to solve business
          challenges. Intelligent Automation was almost exclusively serving
          large multi-national companies who could justify the significant
          investments in technology and people necessary to implement them.
          Roxus set out to change this paradigm.
        </p>
        <p>
          The Roxus Intelligent Automation platform provides best of breed
          digital technologies as a Service, paired with expert execution. This
          creates an accessible, cost effective and scalable model for
          businesses of all sizes.
        </p>
        <p>
          Our global team of experts is committed to disrupting the norm and
          fanatical about our customers’ success. Our knowledge of business and
          technology and a track record of execution gives our customer a
          distinct advantage. With an eye for disruption, our vision, technology
          and methodologies deliver disproportionate impact.
        </p>
      </React.Fragment>
    ),
  },
  {
    index: 2,
    id: "approach",
    title: "Approach",
    mainDesc: (
      <p>
        Technology is complex and business change can be disruptive. Roxus helps
        you move fast, minimising interruption and maximising impact. We take
        the guess work out navigating business transformation and support you to
        execute flawlessly. Roxus assists businesses visualise a digital first
        mindset.
      </p>
    ),
    fullDesc: (
      <React.Fragment>
        <p>
          Technology is complex and business change can be disruptive. Roxus
          helps you move fast, minimising interruption and maximising impact. We
          take the guess work out navigating business transformation and support
          you to execute flawlessly. Roxus assists businesses to visualise a
          digital first mindset. Our customers feel this in everything we do.
        </p>
        <p>
          We've built our platform using the most advanced tools for process
          discovery, business process mapping and automation. We unobtrusively
          reach a deep understanding of your operating model and seek out value
          creating solutions. Your team might be drowning in highly repetitive
          tasks such as moving data between systems. Or need to free up time for
          higher value work. We help you map the journey quickly and make
          informed investment decisions for maximum impact.
        </p>
        <p>
          One size does not fit all, our team define an agile program for you.
          Using our off the shelf automation solutions, purpose built to be
          robust and scalable. Alternately, where required, developing tailored
          solutions to your specific requirements. Our goal is simple – Deliver,
          maximum, impact.
        </p>
      </React.Fragment>
    ),
  },
];

export const homeContent3 = [
  {
    background: "background1",
    mainText: (
      <span>
        Enhance customer experience and scale your business without barriers
      </span>
    ),
    subText: (
      <span>
        Retask your talent aided by Robotic Process Automation, AI and Machine
        Learning
      </span>
    ),
    buttonText: "Arrange a Demo",
  },
  {
    background: "background2",
    mainText: <span>You don't know what you don't know</span>,
    subText: (
      <span>
        Our Discovery Robots monitor your workforce and uncover human processes
        that automation will improve
      </span>
    ),
    buttonText: "Start Discovery",
  },
  {
    background: "background3",
    mainText: <span>Change Pace. Quickly</span>,
    subText: (
      <span>
        Our process capture methodology and pre built automations shorten your
        digital transformation journey
      </span>
    ),
    buttonText: "Let's go",
  },
  {
    background: "background4",
    mainText: <span>Reduce new hire time to value in your contact center</span>,
    subText: (
      <span>
        Attended automation with desktop robots speeds up training and
        induction, lowers latent cost and removes error
      </span>
    ),
    buttonText: "Show me",
  },
];
