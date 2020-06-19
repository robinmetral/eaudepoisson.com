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
      // send matomo event
      window._paq &&
        window._paq.push([
          "trackSiteSearch",
          // search keyword
          searchTerm,
          // search category
          false,
          // number of results
          filtered.length,
        ]);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, searchTerm, isFiltered]);
  return (
    <>
      <Input
        type="search"
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
