import React, { useState, useEffect } from "react";

const FishingBlog = () => {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/1874227029775015733/posts?key=${process.env.BLOGGER_API_KEY}`
    );
    const posts = await response.json();
    console.log("posts", posts);
    setBlogItems(posts);
  }

  return <section>Fishing blog</section>;
};

export default FishingBlog;
