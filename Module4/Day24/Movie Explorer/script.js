const searchIcon = document.querySelector(".search-icon");
const searchBox = document.querySelector('input[type="search"]');
const movieList = document.querySelector(".movie-lists");
console.log(movieList);
const movieTemplate = document.querySelector(".movie_template");

searchIcon.addEventListener("click", () => {
  const movieName = searchBox.value.trim();
  if (!movieName) return;
  loadData(movieName);
  searchBox.value = "";
});
console.log(searchBox);

async function loadData(movieName) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ce8e1dfc&s=${movieName}`,
    );
    if (response.ok) {
      const data = await response.json();
      if (data.Response === "True") {
        showResult(data.Search);
      } else {
        document.querySelector(".errors").textContent = "No Contents Found";
      }
    } else {
      if (response.status === 404) throw new Error("404, Not Found");
      if (response.status === 500)
        throw new Error("505, Internal server error");
      throw new Error(response.status);
    }
  } catch (err) {
    console.log("Fetch", err);
    document.querySelector(".error").textContent = err;
  }
}

function showResult(movies) {
  movieList.textContent = "";

  const fragment = document.createDocumentFragment();

  movies.forEach((movie) => {
    const { Poster, Title, Type, Year } = movie;
    const clone = movieTemplate.content.cloneNode(true);
    const img = clone.querySelector(".poster img");

    img.src =
      Poster === "N/A"
        ? "https://imgs.search.brave.com/Xrbaqdk-97o0mQ6XDICZagbOy7Nsmst-70u5La2Azvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdTNp/LXdiUEUvMS8wLzEx/MzF3L2NhbnZhLWJs/YWNrLWFuZC1jcmVh/bS1zaW1wbGUtbWlz/c2luZy1wZXQtcG9z/dGVyLWFYS1Z0TDhi/SWJFLmpwZw"
        : Poster;

    img.onerror = () => {
      img.src =
        "https://imgs.search.brave.com/Xrbaqdk-97o0mQ6XDICZagbOy7Nsmst-70u5La2Azvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdTNp/LXdiUEUvMS8wLzEx/MzF3L2NhbnZhLWJs/YWNrLWFuZC1jcmVh/bS1zaW1wbGUtbWlz/c2luZy1wZXQtcG9z/dGVyLWFYS1Z0TDhi/SWJFLmpwZw";
    };

    clone.querySelector(".movie-title").textContent = Title;
    clone.querySelector(".movie-type").textContent = Type;
    clone.querySelector(".movie-released-year").textContent = Year;
    fragment.appendChild(clone);
  });
  movieList.appendChild(fragment);
}
