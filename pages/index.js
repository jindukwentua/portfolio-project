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
            Hi, I'm Jindu Kwentua, I'm a data scientist, data analyst, writer, and teacher.{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p>
            I have always been fascinated with data, what you can do with it,
            and learn from it. Taking those learnings and applying them in
            practical ways to solve problems is something that has just come
            naturally to me. My 4+ years of data analysis, research, and data
            visualization experience along with my background and degree in
            Industrial Mathematics and immense passion for helping people have
            fueled my success so far. I look forward to continuing learning and
            growing, utilizing my analytical, problem-solving, and leadership
            skills in forward-thinking ways to help move the world forward.
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
