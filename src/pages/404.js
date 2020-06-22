import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

export default class errorPage extends Component {
  render() {
    return (
      <Layout>
        <header className={styles.error}>
          <Banner title="oops it's a dead end">
            <AniLink fade to="/" className="btn-white">
              Back to Home Page
            </AniLink>
          </Banner>
        </header>
      </Layout>
    )
  }
}
