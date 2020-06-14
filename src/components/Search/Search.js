import React, { useState, useEffect } from "react";

import Input from "../Input";
import PostsList from "../PostsList";

const Search = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const isFiltered = searchTerm.length >= 2;
  useEffect(() => {
    if (isFiltered) {
      const filtered = posts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, searchTerm, isFiltered]);
  return (
    <>
      <Input
        placeholder={"Chercher un article"}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isFiltered ? (
        <p>
          {filteredPosts.length} résultats pour "{searchTerm}" :
        </p>
      ) : (
        <p>Tous les articles :</p>
      )}
      <PostsList posts={filteredPosts} />
    </>
  );
};

export default Search;
