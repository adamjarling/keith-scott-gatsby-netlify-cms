import React from "react";
import Layout from "../../components/Layout";

const Music = () => {
  return (
    <Layout>
      <div className="fullwidth-block download" data-bg-color="#191919">
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths">
              <h2 className="page-title">Music</h2>

              <div className="item">
                <iframe
                  width="100%"
                  height="750"
                  scrolling="no"
                  frameborder="no"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/325361015&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
                ></iframe>
              </div>
            </div>

            <div className="column is-two-fifths">
              <aside className="sidebar">
                <div className="widget">
                  <h3 className="widget-title">Discography</h3>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
