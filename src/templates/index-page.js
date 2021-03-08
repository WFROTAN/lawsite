import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

// Images
import Liberty from '../img/law4.jpg'
import Backimg from '../img/law1.jpg'
import DocumentSvg from '../img/assets/document-text-outline.svg'
import WalletSvg from '../img/assets/wallet-outline.svg'
import GlobeSvg from '../img/assets/globe-outline.svg'
import BuildingSvg from '../img/assets/business-outline.svg'
import HouseSvg from '../img/assets/home-outline.svg'
import CashSvg from '../img/assets/cash-outline.svg'

import "./scss/index-page.scss"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${Backimg})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        height: `60vh`,
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
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient main-section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
              <div className="content breif-description">
                  <div className="breif-image">
                    <img src={Liberty}/>
                  </div>
                  <div className="breif-items">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="practice">
                  <a href="/" className="practice__item">
                    <DocumentSvg style={{ height: '40px' }} />
                    <div className="item-title">
                      Covid-19 Tenants
                    </div>
                    <span className="title-subtext">Learn More</span>
                  </a>
                  <a href="/" className="practice__item">
                    <WalletSvg style={{ height: '40px' }} /> 
                    <div className="item-title">
                      Qualified<br/>Opportunity Zones
                    </div>
                    <span className="title-subtext">Learn More</span>
                  </a>
                  <a href="/" className="practice__item">
                    <BuildingSvg style={{ height: '40px' }} />
                    <div className="item-title">
                      Commercial<br/>Acquisitions
                    </div>
                    <span className="title-subtext">Learn More</span>
                  </a>
                  <a href="/" className="practice__item">
                    <HouseSvg style={{ height: '40px' }} />
                    <div className="item-title">
                      Residential<br/>Transcations
                    </div>
                    <span className="title-subtext">Learn More</span>
                  </a>
                  <a href="/" className="practice__item">
                    <GlobeSvg style={{ height: '40px' }} />
                    <div className="item-title">
                      Foreign Investments
                    </div>
                    <span className="title-subtext">Learn More</span>
                  </a>
                  <a href="/" className="practice__item">
                    <CashSvg style={{ height: '40px' }} />
                    <div className="item-title">
                      Financing
                    </div>
                    <span className="title-subtext">Learn More</span>
                  </a>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll/>
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="reviews">
      <div className="reviews__title"><h2>Attorneys Experience</h2></div>
      <div className="reviews__description"><p>Represented a foreign private fund in connection with the corporate and tax structuring of their investment in commercial real estate project in NYC by utilizing beneficial tax treaty provisions, and combination of debt and equity</p></div>
    </section>
    <section className="form">
        <div className="form-content">
          <h3>Request Consultation</h3>
          <form>
            <div className="form-row">
              <label>
                First Name:
                <input type="text" name="name" />
              </label>
              <label>
                Last Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email:
                <input type="text" name="name" />
              </label>
              <label>
                Phone Number:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="userText">
              <h4>Case details:</h4>
              <textarea rows="10"></textarea>
            </div>
            <input type="submit" value="Send Request" />
          </form>
        </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
/*<Features gridItems={intro.blurbs} />*/