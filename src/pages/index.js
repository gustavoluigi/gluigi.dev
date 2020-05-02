import React from 'react';
import {Helmet} from "react-helmet";

import CommingSoon from '../components/commingSoon/index';
import Header from '../components/Header/Header'
import { graphql, useStaticQuery } from 'gatsby';

export default function App() {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
    return (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Header></Header>
        <CommingSoon></CommingSoon>
    </>
    )
}

