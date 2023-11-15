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
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Hi, I'm Jindu{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <Heading level={4}>
          I'm a Data scientist, data analyst, writer, and teacher.
          </Heading>
          <p>
            I currently live in the Lagos, Nigeria, and work for Ecobank as a Data Scientist.
            I specialise in FinTech, product and growth analytics. I write on my blog <a
                href="https://medium.com/@jindukwentua"
                target="_blank"
                rel="noreferrer"
              >
                here
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
