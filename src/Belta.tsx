import React, { useState, useEffect } from "react";

const url = "https://api.github.com/repositories";

const Belta = () => {
  // state value
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch function
  const fetchUsers = async () => {
    const response = await fetch(url);
    // turn data into json method
    const data = await response.json();
    // console.log(data);
    setRepos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // setup the return condition
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  //  It should have owner profile picture on the first column, then owner name, repo name, repo url, and description
  //  It should have a search feature and a pagination feature
  //  It should be written using typescript and scss

  return (
    <>
      <h1>Repos</h1>
      {repos.map((repo) => {
        const { id, name, html_url, owner, description } = repo;
        // console.log(repo);
        // console.log(owner);
        return (
          <h1 key={id}>
            <p>Owner profile picture: {owner.avatar_url}</p>
            <p>Owner name: {owner.login}</p>
            <p>Repo name: {name}</p>
            <p>Repo url: {html_url}</p>
            <p>Descripition: {description}</p>
          </h1>
        );
      })}
    </>
  );
};

export default Belta;
