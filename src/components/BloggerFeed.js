import React, { useEffect, useState } from "react";
import moment from "moment";

const BloggerFeed = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const apiKey = "AIzaSyA_OID_AxkEnDQ8dgY5c_xXKXzD8Akrdfw";
  const blogId = "1874227029775015733";
  const postsUrl =
    "https://www.googleapis.com/blogger/v3/blogs/" +
    blogId +
    "/posts?key=" +
    apiKey;

  useEffect(() => {
    fetch(postsUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setBlogPosts(data.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div>
      {blogPosts.length > 0 && (
        <div className="box">
          <a href={blogPosts[0].url}>
            <p className="is-size-4">{blogPosts[0].title}</p>
          </a>
          <p>
            Date:{" "}
            {moment(blogPosts[0].updated).format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}
          </p>

          <div dangerouslySetInnerHTML={createMarkup(blogPosts[0].content)} />
        </div>
      )}
    </div>
  );
};

export default BloggerFeed;
