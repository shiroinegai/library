console.log("Library is running.");

const library = [
  { title: "Deatte 5-byou de Battle" },
  { title: "Tensei Shitara Slime Datta Ken" },
  { title: "Kobayashi-san Chi no Maid Dragon" },
];

const libraryNode = document.getElementById("library");

function Book(title) {
  this.title = title;
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks() {
  library.forEach((book) => {
    appendToLibraryNode(createBookNode(book));
  });
}

function createBookNode(book) {
  const bookNode = document.createElement("li");

  bookNode.append(`${book.title}`);

  return bookNode;
}

function appendToLibraryNode(bookNode) {
  libraryNode.append(bookNode);
}

displayBooks();
