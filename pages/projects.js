import React from "react"
import Heading from "../src/components/Heading"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"

const Projects = () => {
  return (
    <Layout>
      <Seo title="Projects" />

      <div className="container">
        <Heading level={1} style={{ marginBottom: "40px" }}>
          Projects I've Worked On
        </Heading>

        <div class="flex flex-col gap-10">
          <Heading level={2} style={{ marginBottom: "0px" }}>
            Side Projects
          </Heading>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                My Website
              </Heading>
              <p className="text-sm">React - Gatsby - Tailwind CSS</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://aarondunphy.com/"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View App
                </a>
                <a
                  href="https://github.com/aarondunphy/aarondunphy.com"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                How Popular is your Birthday Dashboard?
              </Heading>
              <p className="text-sm">Tableau - Excel</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://public.tableau.com/app/profile/jindu.kwentua/viz/HowPopularisyourbirthday_16316239892750/BirthdayPopularityDashboard"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Dashboard
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Applying Machine Learning to Charity Donations
              </Heading>
              <p className="text-sm">Python - Jupyter Notebook - Excel - Git</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://towardsdatascience.com/machine-learning-and-charity-donations-a-case-study-ed6e63f18db7"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  Medium
                </a>
                <a
                  href="https://github.com/jindukwentua/Applying-Machine-Learning-to-Charity-donations"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                The Effect of Corona Virus on Air Travel in America 2020 vs.
                2019
              </Heading>
              <p className="text-sm">Tableau Dashboard</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://public.tableau.com/app/profile/jindu.kwentua/viz/TheEffectofCoronaVirusonAirTravelinAmerica2020vs_2019/CovidandAirTravelDashboard"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Dashboard
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                UK Trade With the EU Since BREXIT
              </Heading>
              <p className="text-sm">Tableau Dashboard</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://public.tableau.com/app/profile/jindu.kwentua/viz/UKTRADEWITHTHEEUSINCEBREXIT/UKTradeDashboard/"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Dashboard
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Sentiment Analysis - The past 2 Nigerian Elections
              </Heading>
              <p className="text-sm">
                Python - Jupyter Notebook - Excel - TwitterAPI
              </p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://github.com/jindukwentua/SGA07_DATASCIENCETRACK/tree/master/Final%20Project"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Predicting Student Performance
              </Heading>
              <p className="text-sm">Python - Jupyter Notebook - Excel</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://github.com/jindukwentua/predicting-students-performance"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Covid Sentiment Analysis
              </Heading>
              <p className="text-sm">R - Excel - TwitterAPI</p>
              <div class="flex justify-between items-center gap-4 mt-4">
                <a
                  href="https://github.com/jindukwentua/SGA07_DATASCIENCETRACK/blob/master/Covid_NLP/Covid%20sentiment%20analysis.R"
                  target="_blank"
                  className="text-indigo-700 hover:text-violet-500"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <Heading level={2} style={{ marginBottom: "0px" }}>
            Experience
          </Heading>

          <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
            <div className="w-full md:w-1/3">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Brooi
              </Heading>
              <p className="text-xl mb-0">Technical Product Manager</p>
              <p className="text-sm">
                Jira - Google Workspace - Python - Excel
              </p>
              <p className="text-xs mb-0">Nov 2021 - Date</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Performing thorough market research and competitive analysis to
                understand and effectively communicate Brooi’s product value
                proposition.
              </p>
              <p>
                Collaborating cross-functionally with design, engineering, and
                real estate professionals to identify, develop and execute
                detailed product requirement document.
              </p>
              <p>
                Liaising with design and engineering teams on design concepts,
                engineering tradeoffs, and product iterations
              </p>
              <p>
                Evangelizing product vision to key stakeholders using
                competitive research, user interviews, and use cases to build
                product consensus
              </p>
            </div>
          </div>

          <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
            <div className="w-full md:w-1/3">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Garcon Wines
              </Heading>
              <p className="text-xl mb-0">Data Analyst</p>
              <p className="text-sm">
                Python - Research - SQL - Excel - TwitterAPI
              </p>
              <p className="text-xs mb-0">Sep 2021 - Nov 2021</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Participated in feature engineering such as feature generating,
                PCA, feature normalization, and label encoding with Scikit-learn
                pre-processing
              </p>
              <p>
                Monitored market and competitor trends, and analyzed customer
                feedback data, leading to key product marketing changes during
                tenure clusters from different social networking sites using
                sentiment analysis and text analytics
              </p>
              <p>
                Analyzed user’s social media posts to identify areas for brand
                improvement using topic modeling, leading to actionable feedback
                for the marketing team
              </p>
            </div>
          </div>

          <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
            <div className="w-full md:w-1/3">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Josla
              </Heading>
              <p className="text-xl mb-0">Data Scientist</p>
              <p className="text-sm">SQL - Tableau - Python - Excel - Flask</p>
              <p className="text-xs mb-0">Sep 2020 - Sep 2021</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Provided in-depth data analysis, visualizations, queries,
                research, and data science approach for technical & business
                optimization across different industry verticals and clients
              </p>
              <p>
                Built data visualizations dashboards using Tableau for product
                KPI’s that reduced manual reporting work
              </p>
              <p>
                Participated in stakeholder meetings with cross-functional teams
                and helped in defining go-to-market strategies
              </p>
              <p>
                Worked closely with the product manager to provide data
                solutions such as a/b testing, customer analysis, time series
                analysis to issues impacting customers
              </p>
              <p>
                Managed the Cloud Architecture, automation, system
                configurations, and security settings of Josla’s cloud data and
                database environment.
              </p>
              <p>
                Designed, built, and maintained application program interface
                (APIs), machine learning (ML) models, and systems across Josla’s
                digital products
              </p>
              <p>
                Participated in building the onboarding and bill payment
                features using Python and Nodejs
              </p>
            </div>
          </div>

          <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
            <div className="w-full md:w-1/3">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Pantote
              </Heading>
              <p className="text-xl mb-0">Data Analyst</p>
              <p className="text-sm">Tableau - Python - Excel</p>
              <p className="text-xs mb-0">Jan 2020 - Aug 2021</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Developed and managed metrics and dashboard reporting system for
                operations, supply chain workflow, and data processing
              </p>
              <p>
                Team player with good communication and interpersonal skills.
                Responsible for interacting with business partners to identify
                information needs and business requirements for reports.
              </p>
              <p>
                Developed Tableau data visualization using Cross tabs, Heat
                maps, Box and Whisker charts, Scatter Plots, Geographic maps,
                Pie Charts and Bar Charts, and Density charts.
              </p>
            </div>
          </div>
          <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
            <div className="w-full md:w-1/3">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Coven Labs
              </Heading>
              <p className="text-xl mb-0">Data Analyst</p>
              <p className="text-sm">Tableau - Python - Excel</p>
              <p className="text-xs mb-0">Sep 2019 - Dec 2019</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Performed ad-hoc data analysis and data visualizations tasks
                using statistical tools and techniques such as python and R.
              </p>
              <p>
                Built data analytics dashboards using Tableau that portrayed the
                processed output/results
              </p>
              <p>
                Involved in building, optimizing, and researching natural
                language processing techniques in python for chatbot
                development.
              </p>
              <p>
                Worked extensively with Advance analysis Actions, Calculations,
                Parameters, Background images, Maps, Trend Lines, Statistics,
                and table calculations.
              </p>
            </div>
          </div>

          <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
            <div className="w-full md:w-1/3">
              <Heading level={3} style={{ marginBottom: "0px" }}>
                Capital Express Securities
              </Heading>
              <p className="text-xl mb-0">Market Research Analyst</p>
              <p className="text-sm">Tableau - R - Excel</p>
              <p className="text-xs mb-0">Nov 2018 - Oct 2019</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Gathered information and data to perform data analysis to
                support methodology development and data development for trading
                securities
              </p>
              <p>
                Assisted the investment manager and the chief research officer
                in developing and performing various data analysis projects on
                the mutual fund products
              </p>
              <p>
                Conducted and evaluated quantitative, qualitative, and market
                research analysis and tracked research papers that enabled
                business decisions based on in-depth data investigations and
                analysis on stocks, bonds, and other financial instruments
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
