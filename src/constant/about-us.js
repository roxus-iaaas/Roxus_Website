import React from "react";
import jamesBW from "../assets/images/executive/JamesN_BW.jpg";
import jamesColor from "../assets/images/executive/JamesN_Color.jpg";
import kristianBW from "../assets/images/executive/Kristian_BW.jpg";
import kristianColor from "../assets/images/executive/Kristian_Color.jpg";
import mishaBW from "../assets/images/executive/Misha_BW.jpeg";
import mishaColor from "../assets/images/executive/Misha_Color.jpeg";
import hoangBW from "../assets/images/executive/Hoang_BW.jpg";
import hoangColor from "../assets/images/executive/Hoang_Color.jpg";

export const aboutUsStep = [
  {
    title: "Engage",
    description: "Expert consulting and discovery services",
  },
  {
    title: "Design",
    description: "Robust design methodolgy and documentation",
  },
  {
    title: "Build",
    description: "Roxus robotic and code engineers build to specification",
  },
  {
    title: "Test",
    description: "Everything is tested alongside your team ",
  },
  {
    title: "Automate",
    description: "Implementation into production",
  },
  {
    title: "Manage",
    description: "Roxus manage, support and refine services ",
  },
];

export const mobileAboutUsStep = [
  {
    title: "Engage",
    description: "Expert consulting and discovery services",
  },
  {
    title: "Design",
    description: "Robust design methodolgy and documentation",
  },
  {
    title: "Build",
    description: "Roxus robotic and code engineers build to specification",
  },
  {
    title: "Test",
    description: "Everything is tested alongside your team ",
  },
  {
    title: "Automate",
    description: "Implementation into production",
  },
  {
    title: "Manage",
    description: "Roxus manage, support and refine services ",
  },
];

export const executives = [
  {
    bwImage: jamesBW,
    colorImage: jamesColor,
    name: "James Nicolson",
    occupation: "CEO and Founder",
    longDesc: (
      <React.Fragment>
        <p>
          James is CEO & Founder at Roxus.io. He’s got an inquisitive mind for
          technology and loves to push the boundaries of possible. He’s worked
          closely with many of the largest British & Australian public and
          private sector organisations. Evaluating, managing and delivering
          technology driven business solutions. James spent 7 years leading
          business engagement with telecommunications operators at Optus, part
          of the Singtel group. He was in a cohort of future leaders,
          architected to drive disruption and digitisation across the Singtel
          group. He also spent 8 years with the Virgin Media’s business
          division, leading enterprise sales teams across in the United Kingdom.
        </p>
        <p>
          James’ vision is to make game changing technology solutions accessible
          to all businesses.
        </p>
      </React.Fragment>
    ),
  },
  {
    bwImage: kristianBW,
    colorImage: kristianColor,
    name: "Kristian Stott",
    occupation: "Digital Evangelist",
    longDesc: (
      <React.Fragment>
        <p>
          Kristian is a digital evangelist at Roxus.io. He leads market
          development and client engagement. With strong strategic direction and
          problem solving skills, Kristian has held leadership roles in small,
          mid-sized and global businesses. He’s implemented widescale
          transformation and digital first culture for clients and has a passion
          for business efficiency, business improvement, and evolution of
          customer experience.
        </p>
        <p>
          Kristian holds an honours degree in International Business Management
          and is a Prince II practitioner. He is culturally adept, deliberate to
          a fault, straight talking and relentless in his pursuit of ‘always
          better’. When he’s not at work Kristian can be found on a mountain,
          hip deep in powder.
        </p>
      </React.Fragment>
    ),
  },
  {
    bwImage: mishaBW,
    colorImage: mishaColor,
    name: "Misha Rozhkovsky",
    occupation: "VP, Automation & Discovery",
    longDesc: (
      <React.Fragment>
        <p>
          Misha is VP Automation and Discovery at Roxus.io. He leads our
          technology and solutions. Prior to joining Roxus, Misha worked with
          Kryon Systems, an Automation and AI software as regional pre-sales for
          Israel, East Europe and Russian states and global engagement lead for
          Attended Automation and Process Discovery. Prior to Kryon, he worked
          with Pivotal Israel, a big data company and division of EMC
          Corporation now Dell EMC.
        </p>
        <p>
          Misha has a BSc Chemistry from Bar Ilan University, Israel; is an
          Expert Solutions Architect in Hadoop Big Data platform and an
          accomplished automation expert. He has an automation first mindset.
          When he’s not at work Misha is a travel junkie and is more than ‘just
          a bit of a foodie’.
        </p>
      </React.Fragment>
    ),
  },
  {
    bwImage: hoangBW,
    colorImage: hoangColor,
    name: "Hoang Tran",
    occupation: "Director, Automation Development",
    longDesc: (
      <React.Fragment>
        <p>
          Hoang Tran is Director, Automation Development at Roxus.io leading the
          design, build and operation of solutions for our customers. Prior to
          joining roxus, Hoang worked for Vinhomes, part of the Vingroup – the
          #1 Property Services company in Vietnam leading automation operations.
          He was responsible for designing, building and operating solutions
          that saved thousands of hours of employee time across multiple
          departments.
        </p>
        <p>
          Hoang holds an Engineer degree from the #1 university in Vietnam,
          Hanoi University of Science and Technology. An accomplished senior
          software engineer. He began his career in Samsung Vietnam Mobile R&D
          Centre before moving on to develop software and web for Thaimillion,
          lottery. He’s a specialist in Robitic Process Automation as well as
          backend and frontend languages for web and applications.
        </p>
        <p>
          In his free time, he loves going fishing, growing vegetables, getting
          his feet dirty in the countryside.
        </p>
      </React.Fragment>
    ),
  },
];
