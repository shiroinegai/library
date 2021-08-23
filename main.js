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

  const buttons = document.createElement("div");
  buttons.classList.add("book-buttons");

  const toggleFavourite = document.createElement("button");
  toggleFavourite.classList.add("toggle-favourite");

  const xmlns = "http://www.w3.org/2000/svg";
  const starSVG = document.createElementNS(xmlns, "svg");
  starSVG.setAttributeNS(null, "enable-background", "new 0 0 24 24");
  starSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  const g1 = document.createElementNS(xmlns, "g");
  const path1 = document.createElementNS(xmlns, "path");
  path1.setAttributeNS(null, "d", "M0,0h24v24H0V0z");
  path1.setAttributeNS(null, "fill", "none");
  const path2 = document.createElementNS(xmlns, "path");
  path1.setAttributeNS(null, "d", "M0,0h24v24H0V0z");
  path1.setAttributeNS(null, "fill", "none");
  g1.append(path1);
  g1.append(path2);
  const g2 = document.createElementNS(xmlns, "g");
  const path3 = document.createElementNS(xmlns, "path");
  path3.setAttributeNS(
    null,
    "d",
    "M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"
  );
  g2.append(path3);
  starSVG.append(g1);
  starSVG.append(g2);
  toggleFavourite.append(starSVG);

  const toggleRead = document.createElement("button");
  toggleRead.classList.add("toggle-read");

  const tickSVG = document.createElementNS(xmlns, "svg");
  tickSVG.setAttributeNS(null, "viewBox", "0 0 24 24");
  const path4 = document.createElementNS(xmlns, "path");
  path4.setAttributeNS(null, "path", "M0 0h24v24H0V0z");
  path4.setAttributeNS(null, "fill", "none");
  const path5 = document.createElementNS(xmlns, "path");
  path5.setAttributeNS(
    null,
    "d",
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"
  );
  tickSVG.append(path4);
  tickSVG.append(path5);
  toggleRead.append(tickSVG);

  buttons.append(toggleFavourite);
  buttons.append(toggleRead);

  bookNode.append(buttons);

  return bookNode;
}

displayBooks();
