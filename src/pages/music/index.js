import React from "react";
import Layout from "../../components/Layout";
import Discography from "../../components/Discography";
import { albums } from "../../services/albums";

const Music = () => {
  return (
    <Layout>
      <section className="section music inner-content">
        <div className="container content">
          <iframe
            width="100%"
            height="750"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/325361015&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
          ></iframe>
          <h2 className="entry-title">Albums</h2>
          <div className="columns is-multiline">
            {albums.map(album => (
              <div className="column is-half">
                <div className="card" key={album.title}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <a href={album.url} target="_blank">
                        <img src={album.imgSrc} alt={album.title} />
                      </a>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <h3 className="album-title">{album.title}</h3>
                      <p>{album.year}</p>
                      <p>{album.trackCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <section className="section">
            <h2 className="entry-title">Reviews</h2>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Music;
