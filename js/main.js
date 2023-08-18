import '../css/style.css';
import { getJSON } from './utils/getJSON';
let books,
  seeBooks = 0

async function start() {
  books = await getJSON('./public/data/books.json')
  console.log(books)
  startPage()
  if (seeBooks) {
    viewBooks() 
  }
}

function startPage() {
  document.querySelector(".mainView").innerHTML = `
  <p class="HomeTitle text-center">Home page</p>
  <p>Welcome! This is the home page for the book store. Use the navigation bar above to access what you want.</p>`;
  document.querySelector(".bookView").innerHTML = ``;
}

document.querySelector("#Home").onclick = function () {
  document.querySelector(".mainView").innerHTML = `
  <p class="HomeTitle text-center">Home page</p>
  <p>Welcome! This is the home page for the book store. Use the navigation bar above to access what you want.</p>
  `;

  document.querySelector(".bookView").innerHTML = ``
}

function viewBooks() {
  document.querySelector(".bookView").innerHTML = `
  <p class = "BookViewTitle text-center">Book page</p>
  <p></p>`
  document.querySelector(".mainView").innerHTML = ``;
  
  document.querySelector(".bookView").innerHTML += books.map(({ bookTitle, bookAuthor, description, category, price }) => `
  <div class="bookItem">
  <p>${bookTitle}</p>
  <p>${bookAuthor}</p>
  <p>${description}</p>
  <p>${category}</p>
  <p>${price}</p>
  <button class="detailsBtn btn btn-primary></button
  <button class="buyBtn btn btn-primary></button>
  </div>`); // last two are details and purhcase buttons
}

document.querySelector("#Books").onclick = function () {
  if (!seeBooks) {
    seeBooks == 1
  }
  start()
}

start();