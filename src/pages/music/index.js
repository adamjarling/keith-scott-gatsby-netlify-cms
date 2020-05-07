import React from "react";
import Layout from "../../components/Layout";
import { albums } from "../../services/albums";
import HeroImageBg from "../../components/HeroImageBg";
import { graphql } from "gatsby";

const Music = ({ data }) => {
  return (
    <Layout>
      <HeroImageBg
        title="Music"
        subtitle="Keith Scott Discography"
        bgImage={data.bgImage.childImageSharp.fluid}
      />

      <section className="section">
        <div className="container content">
          <div className="columns is-multiline">
            {albums.map((album) => (
              <div key={album.title} className="column is-half">
                <div className="card" key={album.title}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <a
                        href={album.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={album.imgSrc} alt={album.title} />
                      </a>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h3 className="title">{album.title}</h3>
                      <p className="subtitle">
                        {album.year} - {album.trackCount}
                      </p>
                      <p>
                        <a
                          href={album.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button is-primary is-fullwidth"
                        >
                          Buy Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section has-background-primary">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <iframe
                title="Soundcloud player"
                width="100%"
                height="750"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/325361015&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Music;

export const pageQuery = graphql`
  query MusicPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "album-stella-blues.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
