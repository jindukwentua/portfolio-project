import React from "react"

import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import Image from "next/image"
import Heading from "../src/components/Heading"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="container">
        <Heading level={1}>Hi, I'm Jindu Kwentua 👋</Heading>
        <Heading level={4}>
          A Data Scientist || Data Analyst from Lagos, Nigeria
        </Heading>

        <div className="flex flex-col-reverse gap-8 items-center mb-10 md:flex-row">
          <div className="md:w-2/3">
            <p>
              I have always been fascinated with data, what you can do with it,
              and learn from it. Taking those learnings and applying them in
              practical ways to solve problems is something that has just come
              naturally to me. My 4+ years of data analysis, research, and data
              visualization experience along with my background and degree in
              Industrial Mathematics and immense passion for helping people have
              fueled my success so far. I look forward to continuing learning
              and growing, utilizing my analytical, problem-solving, and
              leadership skills in forward-thinking ways to help move the world
              forward.
            </p>

            <p>
              I have worked in data science, data analytics and product analytics roles for 4+
              years. The technologies I work with are Python, SQL, R, Excel, and
              Tableau. I use code, queries and visualizations not
              only to do my day-to-day job, but also to solve everyday problems
              I come across.
            </p>
            <p>
              You can take a look at my{" "}
              <a
                href="/images/Kwentua Jindu - data analyst CV (1).pdf"
                target="_blank"
                rel="noreferrer"
              >
                <strong><u>CV.</u></strong>
              </a>
            </p>
            <p>
              When I am not writing code, I love writing{" "}
              <a
                href="https://jindukwentua.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <strong><u>here</u></strong>
              </a>
              . I also exercise by playing football and running. I love reading
              about startups solving challenging problems using data and technology.
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/images/56926910.png"
              alt="Profile Picture"
              layout="responsive"
              width={600}
              height={550}
            />
          </div>
        </div>

        <Heading level={2}>Tech Skills</Heading>
        <ul className="list-disc columns-3 ml-6">
          <li>Python</li>s
          <li>R</li>
          <li>SQL</li>
          <li>Excel</li>
          <li>Tableau</li>
          <li>NoSQL</li>
          <li>APIs</li>
          <li>Predictive Modeling</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Data visualization</li>
          <li>Data Analytics</li>
          <li>Research</li>
          <li>Sentiment Analysis</li>
        </ul>
      </div>
    </Layout>
  )
}

export default About
