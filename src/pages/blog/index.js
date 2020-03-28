import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
              backgroundImage: `url('/img/cover.png')`,
              backgroundPosition: "left top",
              backgrountAttachment: "fixed"
          }}
            >

        <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
            <h1
        className="has-text-weight-bold is-size-1"
        style={{
            color: 'white',
            padding: '1rem',
            textAlign: 'center'
        }}
          >
            Latest Stories
        </h1>
            
            <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              textAlign: 'center'
          }}
            >
            Each post is a curated list of the perfect gifts for every occasion.
            </h3>
            </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
