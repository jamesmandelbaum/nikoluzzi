import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/Grid"

const SecondPage = () => (
  <Layout>
    <SEO title="Campolide Grid" />
    <h1>Hi from the second page</h1>
    <Grid></Grid>
  </Layout>
)

export default SecondPage
