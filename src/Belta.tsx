import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

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

  // For Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(repos.length / usersPerPage);

  const changePage = ({ selected }: { [key: string]: any }) => {
    setPageNumber(selected);
  };

  // display users
  const displayUsers = repos
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((repos) => {
      const { id, name, html_url, owner, description } = repos;
      return (
        <h1 key={id}>
          <p>Owner profile picture: {owner.avatar_url}</p>
          <p>Owner name: {owner.login}</p>
          <p>Repo name: {name}</p>
          <p>Repo url: {html_url}</p>
          <p>Descripition: {description}</p>
        </h1>
      );
    });

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
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
      />
    </>
  );
};

export default Belta;
