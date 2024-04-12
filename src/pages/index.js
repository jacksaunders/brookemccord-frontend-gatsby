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
          Brooke McCord is a writer, speaker and digital content director.
        </h1>
      </div>
      <div className={styles.contact}>
        <div>
          <h4>
            <a href="mailto:brooke@brookemccord.com">Get in touch.</a>
          </h4>
          <h4>
            <a href="https://0bjectsofdesire.substack.com/">
              Subscribe to my newsletter.
            </a>
          </h4>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
