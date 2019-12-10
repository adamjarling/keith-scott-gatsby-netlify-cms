import React from "react";
import Layout from "../../components/Layout";
import Gallery from "react-grid-gallery";

import pic1 from "../../images/gallery/salmon-roots-blues-2017.jpg";
import pic2 from "../../images/gallery/keith-kim-simmonds.jpg";
import pic3 from "../../images/gallery/keith_tony_hob.jpg";
import pic4 from "../../images/gallery/IMG_4051.jpg";
import pic5 from "../../images/gallery/salmon-roots-blues-2017.jpg";

let photos = [
  {
    src: pic1,
    thumbnail: pic1,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "Live with Reverand B. Jones at Salmon Arm Roots & Blues Festival"
  },
  {
    src: pic2,
    thumbnail: pic2,
    thumbnailWidth: 250,
    thumbnailHeight: 320,
    isSelected: false,
    caption: "With Kim Simmonds of Savoy Brown"
  },
  {
    src: pic3,
    thumbnail: pic3,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "The Electric Blues Junkies LIVE"
  },
  {
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "Promo photo"
  },
  {
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: false,
    caption: "Promo photo"
  }

  // {
  //   fileName: "keith-beach-boys.png",
  //   title: "Tim Bonahomme from the Beach Boys and Kristi Dietz in LA",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "keith-lynn-sorensen.jpg",
  //   title: "With Lynn Sorensen from Bad Company",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "keith-luther-guitar-jr-johnson.jpg",
  //   title: "With Luther Guitar Jr. Johnson",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-john-primer.jpg",
  //   title:
  //     "With John Primer at Salmon Arm Roots Folk Festival British Columbia",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "keith-buddy-guy.jpg",
  //   title: "With Buddy Guy",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "keith-muddy-waters.jpg",
  //   title: "With Muddy Waters",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-rev-jones.jpg",
  //   title: "With Reverand Jones",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-hubert-sumlin.jpg",
  //   title: "With Hubert Sumlin",
  //   filterClass: ""
  // },

  // {
  //   fileName: "keith-robert-plant.jpg",
  //   title: "Hanging with Robert Plant",
  //   filterClass: "legends"
  // },
  // {
  //   fileName: "keith-pat-martino.jpg",
  //   title: "Yea, Pat Martino!",
  //   filterClass: "legends"
  // },
  // {
  //   fileName: "keith-puno-palladin.jpg",
  //   title: "With Pino Palladino from The Who",
  //   filterClass: "legends"
  // },
  // {
  //   fileName: "keith-sol-snyder-from-morrisey-lo-res.jpg",
  //   title: "Chillin with with Sol Snyder from Morrisey",
  //   filterClass: "legends"
  // },
  // {
  //   fileName: "IMG_7696.JPG",
  //   title: "Promo Shot",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "IMG_7694.JPG",
  //   title: "Promo Shot",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "keith-jimmy-dawkins.jpg",
  //   title: "With Jimmy Dawkins",
  //   filterClass: "promo"
  // },
  // {
  //   fileName: "keith-alaska-lo-res.jpg",
  //   title: "On Tour in Alaska",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-hob-2017.jpg",
  //   title: "Live at the House of Blues - Chicago",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-fishing-hoh-river.jpg",
  //   title: "Fishing at the HOH River",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-cover-shot.jpg",
  //   title: "Keith Scott Cover Shot",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-bo-diddley.jpg",
  //   title: "With Bo Diddley",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-john-mayall.jpg",
  //   title: "With John Mayall!",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-group1.jpg",
  //   title: "With Buddy Miles and Larry McCray",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-lurrie-bell.jpg",
  //   title: "With Lurie Bell",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-eric-johnson.jpg",
  //   title: "With guitar wizard Eric Johnson",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-on-stage.jpg",
  //   title: "On stage",
  //   filterClass: ""
  // },
  // {
  //   fileName: "KeithScottBlues2.jpg",
  //   title: "Keith promo 2014",
  //   filterClass: ""
  // },
  // {
  //   fileName: "keith-charlie-jacobsen.jpg",
  //   title: "With Charlie Jacobsen",
  //   filterClass: ""
  // }
];

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
            <Gallery images={photos} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
