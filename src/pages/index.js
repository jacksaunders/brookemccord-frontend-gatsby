import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO keywords={[`brooke mccord`, `digital content`, `writer`, `speaker`]} />
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>
          Brooke McCord is a creative director, consultant and editor
          specialising in digital culture, content, community and brand
          building. With over a decade of experience delivering culture-first
          creative and strategy for brands and publications globally, Brooke has
          held positions as digital director of THE FACE, spearheading the
          magazine’s digital relaunch, and social media and editorial content
          director at Marc Jacobs. As a writer, her work has appeared in THE
          FACE, Dazed, i-D, Vogue Business and more.
        </h1>
      </div>
      <div className={styles.contact}>
        <div>
          <h4>
            <a href="mailto:brooke@brookemccord.com">Contact</a>
          </h4>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
