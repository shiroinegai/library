console.log("Library is running.");

const library = [
  {
    author: "Tatsuki Fujimoto",
    coverImage:
      "https://kbimages1-a.akamaihd.net/9b90e481-4b79-47e1-a919-3d0a46752177/chainsaw-man-vol-1.webp",
    favourite: false,
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
    pages: 208,
    read: true,
    synopsis: `You can rent a girlfriend, but can you buy love? Reeling from a bad breakup, Kazuya rents the beautiful, polite Chizuru for a date. But rock bottom might be so much lower than he thought! Chizuru is much more than the pretty face and sweet demeanor he thought he’d bargained for…In today’s Japan, “rental” services can deliver an afternoon with a “friend,” a “parent,” even a fake girlfriend! After a staggering betrayal by his girlfriend, hapless freshman Kazuya gets just desperate enough to give it a try. But he quickly discovers how complicated it can be to “rent” an emotional connection, and his new “girlfriend,” who’s trying to keep her side hustle secret, will panic when she finds out her real life and Kazuya’s are intertwined in surprising ways! Family, school, and life all start to go wrong, too… It’s sweet but naïve boy meets cute but ruthless girl in this 21st-century manga rom-com!`,
    title: "Rent-A-Girlfriend",
  },
];

const libraryNode = document.getElementById("library");

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
  deleteBook: () => {
    console.log("deleteBook is called");
  },
  toggleFavouriteStatus: () => {
    console.log("toggleFavouriteStatus is called");
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
  const bookNode = document.createElement("article");
  bookNode.setAttribute("data-index", uuidv4());

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

  return bookNode;
}

displayBooks();
