console.log("Library is running.");

const library = [
  { title: "Deatte 5-byou de Battle" },
  { title: "Tensei Shitara Slime Datta Ken" },
  { title: "Kobayashi-san Chi no Maid Dragon" },
];

const libraryNode = document.getElementById("library");

function Book(author, coverImage, pages, read, title) {
  this.author = author;
  this.coverImage = coverImage;
  this.pages = pages;
  this.read = read;
  this.title = title;
}

Book.prototype = {
  deleteBook: () => {
    console.log("deleteBook is called");
  },
  toggleReadStatus: () => {
    console.log("toggleReadStatus is called");
  },
};

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks() {
  library.forEach((book) => {
    libraryNode.append(createBookNode(book));
  });
}

function createBookNode(book) {
  const bookNode = document.createElement("li");

  bookNode.append(`${book.title}`);

  return bookNode;
}

displayBooks();
