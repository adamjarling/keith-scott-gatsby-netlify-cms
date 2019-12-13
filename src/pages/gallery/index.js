import React from "react";
import Layout from "../../components/Layout";
import PhotoGalleryRoll2 from "../../components/PhotoGalleryRoll2";

const GalleryPage = () => {
  return (
    <Layout>
      <div
        className="fullwidth-block gallery inner-content"
        data-bg-color="#191919"
      >
        <div className="container">
          <div className="content fullwidth">
            <h2 className="entry-title">Gallery</h2>
            <PhotoGalleryRoll2 />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
