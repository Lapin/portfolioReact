import React from 'react';
import { graphql } from "gatsby"
import DefaultLayout from "../components/default"

export default function about({ data }) {
     
        return (
            <DefaultLayout>
            <div className="wrapper">
                about js file
                <br/>
                {data.site.siteMetadata.title}
            </div>
            </DefaultLayout>
        )
};


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`