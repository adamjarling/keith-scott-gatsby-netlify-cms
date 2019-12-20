import React from "react";
import Layout from "../../components/Layout";
import Discography from "../../components/Discography";

const Music = () => {
  return (
    <Layout>
      <div
        className="fullwidth-block music inner-content"
        data-bg-color="#191919"
      >
        <div className="container content">
          <iframe
            width="100%"
            height="750"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/325361015&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
          ></iframe>

          <Discography />
        </div>
      </div>
    </Layout>
  );
};

export default Music;
