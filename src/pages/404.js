import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

export default class errorPage extends Component {
  render() {
    return (
      <Layout>
        <header className={styles.error}>
          <Banner title="oops it's a dead end"></Banner>
        </header>
      </Layout>
    )
  }
}
