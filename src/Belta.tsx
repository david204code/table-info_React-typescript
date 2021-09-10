import React, { useState, useEffect } from "react";

const url = "https://api.github.com/repositories";

const Belta = () => {
  // state value
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch function
  const fetchUsers = async () => {
    const response = await fetch(url);
    // turn data into json method
    const repos = await response.json();
    // console.log(repos);
    setRepos(repos);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Repos</h1>
      {repos.map((repo) => {
        const { id, name, description, owner } = repo;
        console.log(repo);
        return (
          <li key={id}>
            <p>
              {name}, {description}, {owner}
            </p>
          </li>
        );
      })}
    </>
  );
};

export default Belta;
