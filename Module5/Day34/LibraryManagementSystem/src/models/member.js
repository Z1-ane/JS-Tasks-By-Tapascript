import { User } from "./user";

export class Member extends User {
  constructor(name, email) {
    super(name, email);
    this.borrowedBooks = [];
  }
  getRole() {
    return "Member";
  }
  borrowBook(book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book);
    }
  }
  returnBook(bookId) {
    const index = this.borrowedBooks.findIndex((b) => b.id === bookId);
    if (index !== -1) {
      this.borrowedBooks[index].isAvailable = true;
      this.borrowedBooks.splice(index, 1);
    }
  }
  getBorrowedBooks() {
    return this.borrowedBooks;
  }
}
