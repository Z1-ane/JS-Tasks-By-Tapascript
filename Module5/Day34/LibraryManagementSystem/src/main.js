import { Admin } from "./models/admin";
import { Book } from "./models/book";
import { Member } from "./models/member";
import { LibrarySystem } from "./services/LibraryService";

const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection");
const burrowedSection = document.getElementById("burrowedSection");

const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const burrowedList = document.getElementById("burrowedList"); // Bug fix: was selecting wrong element

let currentUser = new Member("John Doe", "john@email.com");
const library = new LibrarySystem();

userSwitcher.addEventListener("change", (e) => {
  const selected = e.target.value;

  currentUser =
    selected === "admin"
      ? new Admin("Alice", "alice@email.com")
      : new Member("John Doe", "john@email.com");

  bookSection.style.display = selected === "admin" ? "block" : "none";
  burrowedSection.style.display = selected === "member" ? "block" : "none";

  renderBooks();
  renderBorrowed(); // Bug fix: was renderBurrowed (typo)
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, genre);
  library.addBook(book);
  renderBooks();
  bookForm.reset();
});

function renderBooks() {
  bookList.innerHTML = "";
  library.getAllBooks().forEach((book) => {
    const li = document.createElement("li");
    li.className =
      "bg-white p-4 rounded shadow flex justify-between items-center";
    let controls = "";

    if (currentUser.getRole() === "Member" && book.isAvailable) {
      controls = `<button class="bg-green-500 text-white px-3 py-1 rounded" data-action="borrow" data-id="${book.id}">Borrow</button>`;
    } else if (currentUser.getRole() === "Admin") {
      controls = `<span class="text-sm text-gray-500">${book.isAvailable ? "Available" : "Borrowed"}</span>`;
    }

    li.innerHTML = `<div><strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em></div>${controls}`;
    bookList.appendChild(li);
  });
}

function renderBorrowed() {
  burrowedList.innerHTML = "";
  if (currentUser.getRole() !== "Member") return;

  const borrowedBooks = currentUser.getBorrowedBooks(); // Bug fix: was getBurrowedBooks

  borrowedBooks.forEach((book) => {
    const li = document.createElement("li");
    li.className =
      "bg-yellow-100 p-4 rounded shadow flex justify-between items-center";

    li.innerHTML = `
      <div>${book.title} by ${book.author}</div>
      <button class="bg-red-500 text-white px-3 py-1 rounded"
        data-action="return" data-id="${book.id}">Return</button>`;

    burrowedList.appendChild(li); // Bug fix: li was never appended to the DOM
  });
}

bookList.addEventListener("click", (e) => {
  const button = e.target.closest("button"); // Bug fix: was using wrong tag check
  if (!button) return;

  const id = button.getAttribute("data-id");
  const action = button.getAttribute("data-action");
  const book = library.getBookById(id);

  if (
    action === "borrow" &&
    currentUser.getRole() === "Member" &&
    book.isAvailable
  ) {
    currentUser.borrowBook(book); // Bug fix: was burrowBook
    renderBooks();
    renderBorrowed();
  }
});

burrowedList.addEventListener("click", (e) => {
  // Bug fix: return handler was missing entirely
  const button = e.target.closest("button");
  if (!button) return;

  const id = button.getAttribute("data-id");
  const action = button.getAttribute("data-action");

  if (action === "return" && currentUser.getRole() === "Member") {
    currentUser.returnBook(id);
    renderBooks();
    renderBorrowed();
  }
});

// Initial Rendering
bookSection.style.display = "none";
renderBooks();
renderBorrowed(); // Bug fix: was calling non-existent burrowedBooks()
