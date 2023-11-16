import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import BlogCard from "../src/components/BlogCard/BlogCard"
import Heading from "../src/components/Heading"
import { getAllPosts } from "../lib/blog"

const Index = ({ posts }) => {
  const Posts = () => {
    return posts.map((post, index) => (
      <div key={index} style={{ marginBottom: 40 }}>
        <BlogCard
          title={post.frontmatter.title}
          slug={post.frontmatter.slug}
          date={post.frontmatter.date}
        />
      </div>
    ))
  }

  return (
    <Layout>
      <Seo title="Home | Data Scientist || Data Analyst in Lagos, Nigeria" />
      <div className="container">
        <div className="py-10 md:py-32 md:w-2/3">
          <Heading className="text-3xl md:text-4xl font-bold mb-1 hover:text-gray-700">[Welcome]
            <span role="img" aria-label="wave">
              🏄🏼‍♂️
            </span>
          </Heading>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Hi, I'm Jindu{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <Heading level={4}>
          I'm a data scientist, data analyst, and writer.
          </Heading>
          <p>
            I currently live in Lagos, Nigeria, and work for Ecobank as a Data Scientist.
            I specialize in leveraging data for strategic decision-making, with a focus on FinTech, product, and growth analytics. Currently dedicated to enhancing decision processes through data insights. I write on my blog <a
                href="https://medium.com/@jindukwentua"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a>
          </p>
        </div>
        <div className="mt-16">
          <Heading level={2}>Blog Posts</Heading>
          <Posts />
        </div>
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
