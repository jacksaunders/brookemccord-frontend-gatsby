import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>Brooke McCord</h1>
        <h2>
          <span>Digital Director of The Face</span> / Writer / Creative Consultant
        </h2>
        <p>
          Brooke McCord is a London-based writer, editor, and consultant,
          working across fashion and contemporary culture who has contributed to{' '}
          <a
            href="http://www.dazeddigital.com/user/BrookeMcCord"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dazed & Confused
          </a>
          , i-D,{' '}
          <a
            href="http://officemagazine.net/interview/all-hell-breaking-loose-hmltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Office
          </a>
          ,{' '}
          <a
            href="https://www.theguardian.com/music/2018/sep/19/st-petersburg-rail-factory-nightclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Guardian
          </a>
          ,{' '}
          <a
            href="https://www.dazeddigital.com/beauty/body/article/42823/1/brazilian-butt-lift-surgery-can-kill-you"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dazed Beauty
          </a>
          , LOVE, Wonderland and{' '}
          <a href="http://www.anothermag.com/user/BrookeMcCord" target="_blank"
          rel="noopener noreferrer">
            AnOther
          </a>
          . As a digital native, Brooke has translated her knowledge and
          understanding of digital behaviour to strategy and content projects
          for the likes of adidas Originals, Nike, Liberty of London, Floom,
          Glossier, The Body Shop, Flannels, Matches, 3INA, Ace & Tate and
          Topshop.
        </p>
      </div>
      <div className={styles.contact}>
        <div>
          <h4>Email</h4>
          <a href="mailto:brooke@brookemccord.com">brooke@brookemccord.com</a>
        </div>
        <div>
          <h4>Instagram</h4>
          <a href="https://instagram.com/brooke_mccord" target="_blank"
          rel="noopener noreferrer">
            @brooke_mccord
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
