function fetchBooks() {
  // Return the fetch chain so tests can await it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((json) => {
      renderBooks(json); // Pass JSON to renderBooks
      return json; // Return json for testing
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
