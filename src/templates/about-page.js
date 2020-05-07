import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content from "../components/Content";
import Discography from "../components/Discography";
import AboutFeaturedImage from "../components/about/FeaturedImage";
import HeroImageBg from "../components/HeroImageBg";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  bgImage: PropTypes.string,
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      {/* <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      /> */}

      <HeroImageBg
        title="About"
        subtitle="The Keith Scott Story"
        bgImage={data.bgImage.childImageSharp.fluid}
      />

      <section className="about section inner-content">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <div className="content">
                <p>
                  <strong>
                    - Steve Sharp, contributing writer, Living Blues magazine
                  </strong>
                </p>
                <p>
                  Remarkably versatile, Chicago-based blues/rock guitarist Keith
                  Scott has been working his way methodically up through the
                  blues' ranks since his parents bought him his first guitar at
                  age 14 and his young ears heard Muddy Waters in 1980.
                </p>
                <p>
                  Born in White Plains, N.Y., Scott was first exposed to the
                  music of Jimi Hendrix, Led Zeppelin and Grand Funk Railroad.
                  With this sonic baptism, a mind-set and foundation were
                  established for him to explore the realm of blues inhabited by
                  the creme de la creme of Chicago musicians such as Waters,
                  Howlin' Wolf, Jimmy Reed and others in that pantheon. Little
                  did Scott know, however, that he would go on in just a few
                  years to actually play with many of the greats of post-war
                  Chicago blues.
                </p>

                <blockquote>
                  "I was totally blown away," Scott says of first hearing
                  Waters, adding he was lucky enough to meet this master of the
                  Chicago blues in 1980 while living in Florida. "Meeting Muddy
                  Waters really helped in spurring my interest in playing blues.
                  My musician friend opened for Muddy on the campus of the
                  University of Florida at Gainesville and he invited me to come
                  and hang out with him."
                </blockquote>

                <p>Scott remembers meeting Waters as being, "overwhelming."</p>

                <blockquote>
                  "He was very cordial," Scott says of the elder statesman.
                  "Then, I met his whole band and partied with them — guys like
                  Matt Murphy and Lovie Lee, Ray Allison, all those guys. I
                  didn't think I'd be in a band until I met Muddy Waters and his
                  band. Then I said, 'I want to be in a blues band.' They were
                  just so stately and well-dressed, and they took their music so
                  seriously. They seemed like they were gentlemen and they loved
                  what they did.”
                </blockquote>

                <p>
                  Around that time, Scott also met Bo Diddley, another encounter
                  that had a profound effect on him.
                </p>

                <blockquote>
                  "I got to spend some time at Bo Diddley's house in
                  Gainesville, Fla. That time, too, my friend was his bass
                  player. Bo was awesome, totally the coolest guy. He cooked, he
                  had a barbeque and I remember he had a lot of dogs," Scott
                  says.
                </blockquote>

                <p>
                  As time passed and Scott became acquainted with the greats of
                  blues through their records and performances as well as
                  personally, the blues crept increasingly into his own guitar
                  playing.
                </p>

                <blockquote>
                  "I thought I would learn to play blues, but I didn't really
                  think I'd get this proficient at it," Scott says.
                </blockquote>

                <p>
                  By 1982, as the love of the blues consumed him, Scott left
                  Florida and moved to Chicago to become part of the
                  mind-blowing scene the city offered in that era.
                </p>

                <blockquote>
                  "My friend said, 'We'll move to Chicago, put a blues band
                  together, play that scene and meet everybody," Scott recalls.
                </blockquote>

                <p>
                  They did just that, and for Scott, it worked better than he
                  could have imagined. Not long after his arrival in Chicago, he
                  was spending his nights at the city's greatest blues clubs, as
                  well as some of its most obscure and down-home West Side
                  haunts, meeting the best of the city's blues talent.
                </p>

                <blockquote>
                  "It was pretty incredible," he says. "After I got there, the
                  next thing I know I am at the Checkerboard Lounge and Buddy
                  Guy was there, just hanging around. Junior Wells was there and
                  everybody was real friendly — and it wasn't commercialized at
                  all."
                </blockquote>

                <p>
                  With his other blues hangouts being the famed Theresa's on the
                  South Side, B.L.U.E.S. on Halsted and innumerable joints on
                  the West Side, Scott's indoctrination into Windy City music
                  progressed at lightning speed, with him meeting and playing
                  behind legends such as Johnny Littlejohn, B.B. Odom, Eddie
                  Taylor and Little Milton. These older gentlemen, Scott says,
                  taught him the importance of "just lying back and being a good
                  accompaniest" while serving as a backing musician. He recalls,
                  also, he learned some practical lessons about dealing with the
                  unpleasant, rougher edges of the Chicago blues world.
                </p>

                <blockquote>
                  "I played my first gig with Bill Warren, who drummed on Junior
                  Wells' 'Hoodoo Man Blues" album," Scott recalls. "He offered
                  $30 for the gig. At the end of the night he gave each guy in
                  the band $5. I said, 'Where's my $30?' He said, 'I meant it's
                  $30 for the band!’
                </blockquote>

                <p>
                  As his playing skills and confidence grew, so did Scott's
                  resume. He was noticed by Hip Linkchain, who asked him to join
                  his band in 1985 and Scott immediately traveled with Linkchain
                  to Calgary, Alberta, Can. It wasn't long before sly
                  businessman and wizard of the West Side blues guitar Jimmy
                  Dawkins — a friend of Linkchain's — snapped up Scott for use
                  in his own insanely heavy blues band. Scott's first gig with
                  Dawkins occurred Oct. 24, 1986 when they drove to Miami Fla.
                  to play the Tobacco Road club. Under Dawkins, Scott cut his
                  teeth further at a fast clip, touring the United States,
                  Canada and Europe into the early 1990s.
                </p>

                <blockquote>
                  "My fondest memories of playing with Jimmy are some of the
                  crazy times in the van at night, driving through Canada and
                  when Robert Plant came to watch us play at B.L.U.E.S. That
                  night with Robert Plant was a highlight. He hung out with us,"
                  Scott says. For Scott, having Plant in the audience symbolized
                  his life had perhaps come full circle — there was his boyhood
                  rock idol, standing in one of Chicago's premier blues clubs,
                  watching him play the music.
                </blockquote>

                <p>
                  As concerts with Dawkins became more sporadic in the 1990s and
                  Scott's reputation as a reliable, controlled and soulful
                  guitar-slinger grew, Scott ventured out on his own, performing
                  a loud and funky brand of music he perfected, labeled and
                  plays to this day called "heavy blues."
                </p>

                <p>
                  Scott has seven solo CDs to his credit, among these, "Heavy
                  Blues," "World Blues" and "Universal Blues." His "Tennessee
                  Blues," released in Fall of 2011, has been reviewed favorably
                  by Living Blues, the world's premier blues magazine. He was
                  also reunited onstage with Dawkins at the 2010 Chicago Blues
                  Festival in front of a crowd of thousands.
                </p>

                <p>
                  Scott maintains an ambitious touring schedule in 2012 that has
                  him driving hundreds of miles a week to perform as an
                  acoustic, solo artist throughout Michigan, Illinois and
                  Wisconsin. He frequently makes treks to play clubs in the
                  Pacific Northwest and Montana, while spending time in the
                  summer working festivals with his electric band. Scott is also
                  a favorite on college campuses and on Chicago's popular WXRT
                  radio.
                </p>

                <blockquote>
                  "I guess it's the lifestyle I enjoy," he says of his hectic,
                  itinerant way of living. "I get to meet new people, create a
                  new progression in my career. I wait for the phone to ring —
                  today it did. Whether it's the House of Blues or a small
                  tavern, it's still what I love to do.”
                </blockquote>
              </div>
            </div>
            <aside className="column is-one-quarter">
              <h3 className="title">Discography</h3>
              <Discography />
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    bgImage: file(
      sourceInstanceName: { eq: "myimages" }
      relativePath: { eq: "keith-on-stage.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
