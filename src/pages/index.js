import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.wrapper}>
      <h1>Brooke McCord</h1>
      <h2>
        <span>Digital Editor of The Face</span> / Writer / Creative Consultant
      </h2>
      <p>
        Brooke McCord is a London-based writer, editor, and consultant, working
        across fashion and contemporary culture who has contributed to Dazed &
        Confused, i-D, Office, The Guardian, Dazed Beauty, LOVE, Wonderland and
        AnOther. As a digital native, Brooke has translated her knowledge and
        understanding of digital behaviour to strategy and content projects for
        the likes of adidas Originals, Nike, Liberty of London, Floom,
        Glossier, The Body Shop, Flannels, Matches, 3INA, Ace & Tate and
        Topshop.
      </p>
      <div className={styles.contact}>
        <div>
          <h4>Email</h4>
          <a href="mailto:brooke@brookemccord.com">brooke@brookemccord.com</a>
        </div>
        <div>
          <h4>Instagram</h4>
          <a href="https://instagram.com/brooke_mccord" target="_blank">
            @brooke_mccord
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
