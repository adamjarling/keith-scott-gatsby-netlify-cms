import React from "react";
import Layout from "../../components/Layout";
import PhotoGalleryRoll2 from "../../components/PhotoGalleryRoll2";

const GalleryPage = () => {
  return (
    <Layout>
      <section className="gallery inner-content section">
        <div className="container content">
          <h2 className="entry-title">Gallery</h2>
          <PhotoGalleryRoll2 />
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
