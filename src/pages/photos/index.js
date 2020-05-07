import React from "react";
import Layout from "../../components/Layout";
import HeroImageBg from "../../components/HeroImageBg";

const Photos = ({ data }) => {
  return (
    <Layout>
      <HeroImageBg
        title="Photos"
        subtitle="Live, Studio, and Fishing"
        bgImage={data.bgImage.childImageSharp.fluid}
      />
      <section className="section">
        <p>Coming soon...</p>
      </section>
    </Layout>
  );
};

export default Photos;

export const pageQuery = graphql`
  query PhotosPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "slide-keith_tony_hob.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
