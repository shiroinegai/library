console.log("Library is running.");

let library = [];

// DOM --start--
const libraryNode = document.getElementById("library");

const formModal = document.querySelector(".form-modal");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookData = getFormData();
  const newBook = new Book(bookData);
  addBookToLibrary(newBook);
  closeFormModal();
});

const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", openFormModal);

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeFormModal();
});

function openFormModal() {
  formModal.style.display = "flex";
}

function closeFormModal() {
  formModal.style.display = "none";
}

function getFormData() {
  let author = document.getElementById("author").value;
  let coverImage = document.getElementById("coverImage").value;
  let favourite = document.getElementById("favourite").checked;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let synopsis = document.getElementById("synopsis").value;
  let title = document.getElementById("title").value;

  if (!coverImage) {
    coverImage =
      "https://kbimages1-a.akamaihd.net/Images/empty_book_cover.webp";
  }
  if (!synopsis) {
    synopsis = `I am sure that ${title} must be intriguing enough for ${author} to write ${pages} page${
      pages > 1 ? "s" : ""
    } of it.`;
  }

  return { author, coverImage, favourite, pages, read, synopsis, title };
}

function displayBooks() {
  libraryNode.innerText = "";
  library.forEach((book) => {
    libraryNode.append(createBookNode(book));
  });
}
// DOM --end--

function Book({ author, coverImage, favourite, pages, read, synopsis, title }) {
  this.author = author;
  this.coverImage = coverImage;
  this.favourite = favourite;
  this.id = uuidv4();
  this.pages = pages;
  this.read = read;
  this.synopsis = synopsis;
  this.title = title;
}

Book.prototype = {
  remove() {
    library = library.filter((book) => book.id !== this.id);
  },
  toggleFavourite() {
    this.favourite = !this.favourite;
  },
  toggleRead() {
    this.read = !this.read;
  },
};

function addBookToLibrary(book) {
  library.push(book);
  console.log("Added");
  displayBooks();
}

function createBookNode(book) {
  const bookNode = document.createElement("article");
  bookNode.addEventListener("click", (e) => {
    e.currentTarget.classList.add("book-is-open");
  });
  bookNode.setAttribute("data-index", book.id);

  const wrapper = document.createElement("div");
  wrapper.classList.add("book-wrapper");

  const coverImage = document.createElement("img");
  coverImage.classList.add("book-cover-image");
  coverImage.setAttribute("src", book.coverImage);
  coverImage.setAttribute("alt", `${book.title} cover image`);
  wrapper.append(coverImage);

  const detail = document.createElement("section");
  detail.classList.add("book-detail");

  const title = document.createElement("h2");
  title.classList.add("book-title");
  title.append(book.title);
  detail.append(title);

  const pages = document.createElement("p");
  pages.classList.add("book-pages");
  pages.append(`${book.pages} pages`);
  detail.append(pages);

  const author = document.createElement("p");
  author.classList.add("book-author");
  author.append(book.author);
  detail.append(author);

  const synopsis = document.createElement("div");
  synopsis.classList.add("book-synopsis");

  const synopsisHeader = document.createElement("h3");
  synopsisHeader.append("Synopsis");
  synopsis.append(synopsisHeader);

  const synopsisText = document.createElement("p");
  synopsisText.append(book.synopsis);
  synopsis.append(synopsisText);

  detail.append(synopsis);

  wrapper.append(detail);

  bookNode.append(wrapper);

  const buttons = document.createElement("div");
  buttons.classList.add("book-buttons");

  const xmlns = "http://www.w3.org/2000/svg";

  // close button --start--
  const close = document.createElement("button");
  close.addEventListener("click", (e) => {
    const target = document.querySelector(`[data-index='${book.id}']`);
    target.classList.remove("book-is-open");
    e.stopPropagation();
  });
  close.classList.add("close");

  const crossSVG = document.createElementNS(xmlns, "svg");
  crossSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  const crossPath = document.createElementNS(xmlns, "path");
  crossPath.setAttributeNS(
    null,
    "d",
    "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
  );
  crossSVG.append(crossPath);
  close.append(crossSVG);
  // close button --end--

  // favourite button --start--
  const toggleFavourite = document.createElement("button");
  toggleFavourite.classList.add("toggle-favourite");

  const starSVG = document.createElementNS(xmlns, "svg");
  if (book.favourite) {
    starSVG.classList.toggle("toggle-true");
  }
  starSVG.setAttributeNS(null, "enable-background", "new 0 0 24 24");
  starSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  const starPath = document.createElementNS(xmlns, "path");
  starPath.setAttributeNS(
    null,
    "d",
    "M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"
  );
  starSVG.append(starPath);
  toggleFavourite.append(starSVG);
  // favourite button --end--

  // read button --start--
  const toggleRead = document.createElement("button");
  toggleRead.classList.add("toggle-read");

  const tickSVG = document.createElementNS(xmlns, "svg");
  if (book.read) {
    tickSVG.classList.toggle("toggle-true");
  }
  tickSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  const tickPath = document.createElementNS(xmlns, "path");
  tickPath.setAttributeNS(
    null,
    "d",
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"
  );
  tickSVG.append(tickPath);
  toggleRead.append(tickSVG);
  // read button --end--

  // remove button --start--
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.setAttribute("data-remove-index", book.id);

  const binSVG = document.createElementNS(xmlns, "svg");
  binSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  const binPath = document.createElementNS(xmlns, "path");
  binPath.setAttributeNS(
    null,
    "d",
    "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
  );
  binSVG.append(binPath);
  remove.append(binSVG);
  // remove button --end--

  buttons.append(close);
  buttons.append(toggleFavourite);
  buttons.append(toggleRead);
  buttons.append(remove);

  bookNode.append(buttons);

  return bookNode;
}

function setPlaceholder() {
  const placeholder = [
    {
      author: "Tatsuki Fujimoto",
      coverImage:
        "https://kbimages1-a.akamaihd.net/9b90e481-4b79-47e1-a919-3d0a46752177/chainsaw-man-vol-1.webp",
      favourite: false,
      id: "test-id-1",
      pages: 191,
      read: true,
      synopsis: `Denji’s a poor young man who’ll do anything for money, even hunting down devils with his pet devil-dog Pochita. He’s a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he’s betrayed by someone he trusts. Now with the power of a devil inside him, Denji’s become a whole new man—Chainsaw Man!`,
      title: "Chainsaw Man",
    },
    {
      author: "Gege Akutami",
      coverImage:
        "https://kbimages1-a.akamaihd.net/cc983110-b588-4fdf-8d43-f63878c75249/jujutsu-kaisen-vol-1.webp",
      favourite: false,
      id: "test-id-2",
      pages: 191,
      read: false,
      synopsis: `Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they’ll unleash when they break the seal…`,
      title: "Jujutsu Kaisen",
    },
    {
      author: "ONE",
      coverImage:
        "https://kbimages1-a.akamaihd.net/92e8c5b0-74dd-489f-afd2-eefe8a9d6847/one-punch-man-vol-1.webp",
      favourite: false,
      id: "test-id-3",
      pages: 200,
      read: true,
      synopsis: `Every time a promising villain appears, Saitama beats the snot out of ’em with one punch! Can he finally find an opponent who can go toe-to-toe with him and give his life some meaning? Or is he doomed to a life of superpowered boredom?`,
      title: "One-Punch Man",
    },
    {
      author: "Aka Akasaka",
      coverImage:
        "https://kbimages1-a.akamaihd.net/acd19c74-1ae9-49ef-9da2-e0221a3fff50/kaguya-sama-love-is-war-vol-1.webp",
      favourite: true,
      id: "test-id-4",
      pages: 213,
      read: true,
      synopsis: `As leaders of their prestigious academy’s student council, Kaguya and Miyuki are the elite of the elite! But it’s lonely at the top… Luckily for them, they’ve fallen in love! There’s just one problem—they both have too much pride to admit it. And so begins the daily scheming to get the object of their affection to confess their romantic feelings first… Love is a war you win by losing.`,
      title: "Kaguya-sama: Love Is War",
    },
    {
      author: "Nanashi",
      coverImage:
        "https://kbimages1-a.akamaihd.net/7cf1f46a-ad09-41d1-815a-54340639bc1f/don-t-toy-with-me-miss-nagatoro-1.webp",
      favourite: false,
      id: "test-id-5",
      pages: 160,
      read: false,
      synopsis: `Nagatoro is a freshman in high school who loves teasing and torturing her older male classmate (Senpai). What is her motivation and why does Senpai put up with her?Does Nagatoro just want to create misery for Senpai? Or maybe she secretly likes him?`,
      title: `Don't Toy With Me, Miss Nagatoro`,
    },
    {
      author: "Negi Haruba",
      coverImage:
        "https://kbimages1-a.akamaihd.net/467fde9d-021c-4d37-b172-aa62b80a7ffa/the-quintessential-quintuplets-1.webp",
      favourite: false,
      id: "test-id-6",
      pages: 192,
      read: false,
      synopsis: `One day, a poor high school second-year named Futaro Uesugi comes across a private tutoring gig with good pay. But his pupils are his classmates!! And they’re quintuplets!! They’re all gorgeous girls, but they’re troublemakers who hate to study and are on the verge of flunking out! And his first task is simply gaining the sisters’ trust?! Every day is a party! The curtain is rising on the Nakano quintuplets’ quirky romantic comedy with five times the cute!!`,
      title: "The Quintessential Quintuplets",
    },
    {
      author: "Reiji Miyajima",
      coverImage:
        "https://kbimages1-a.akamaihd.net/27e0f19d-ca0a-4eba-b4f6-7a702bd70fde/rent-a-girlfriend-1.webp",
      favourite: true,
      id: "test-id-7",
      pages: 208,
      read: true,
      synopsis: `You can rent a girlfriend, but can you buy love? Reeling from a bad breakup, Kazuya rents the beautiful, polite Chizuru for a date. But rock bottom might be so much lower than he thought! Chizuru is much more than the pretty face and sweet demeanor he thought he’d bargained for… In today’s Japan, “rental” services can deliver an afternoon with a “friend,” a “parent,” even a fake girlfriend! After a staggering betrayal by his girlfriend, hapless freshman Kazuya gets just desperate enough to give it a try. But he quickly discovers how complicated it can be to “rent” an emotional connection, and his new “girlfriend,” who’s trying to keep her side hustle secret, will panic when she finds out her real life and Kazuya’s are intertwined in surprising ways! Family, school, and life all start to go wrong, too… It’s sweet but naïve boy meets cute but ruthless girl in this 21st-century manga rom-com!`,
      title: "Rent-A-Girlfriend",
    },
    {
      author: "Fuse",
      coverImage:
        "https://kbimages1-a.akamaihd.net/22460ce8-ea38-40c6-a514-6b58338e063a/that-time-i-got-reincarnated-as-a-slime-1-1.webp",
      favourite: true,
      id: "test-id-8",
      pages: 240,
      read: true,
      synopsis: `As players of Monster Hunter and Dungeons & Dragons know, the slime is not exactly the king of the fantasy monsters. So when a 37-year-old Tokyo salaryman dies and wakes up in a world of dragons and magic, he’s a little disappointed to find he’s become a blind, boneless slime monster. Mikami’s middle age hasn’t gone as he planned: He never found a girlfriend, he got stuck in a dead-end job, and he was abruptly stabbed to death in the street at 37. So when he wakes up in a new world straight out of a fantasy RPG, he’s disappointed but not exactly surprised to find that he’s not a knight or a wizard but a blind slime demon. But there are chances for even a slime to become a hero…`,
      title: "That Time I got Reincarnated as a Slime",
    },
  ];
  localStorage.setItem("library", JSON.stringify(placeholder));
}

if (!localStorage.getItem("library")) {
  setPlaceholder();
} else {
  library = JSON.parse(localStorage.getItem("library"));
  for (let i = 0; i < library.length; i++) {
    library[i] = Object.create(
      Book.prototype,
      Object.getOwnPropertyDescriptors(library[i])
    );
  }
}

displayBooks();
