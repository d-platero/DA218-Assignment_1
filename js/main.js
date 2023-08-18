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
  <p class="homeTitle text-center">Home page</p>
  <p>Welcome! This is the home page for the book store. Use the navigation bar above to access what you want.</p>`;
  document.querySelector(".bookView").innerHTML = ``;
}

document.querySelector("#Home").onclick = function () {
  document.querySelector(".mainView").innerHTML = `
  <p class="homeTitle text-center">Home page</p>
  <p>Welcome! This is the home page for the book store. Use the navigation bar above to access what you want.</p>
  `;

  document.querySelector(".bookView").innerHTML = ``
}

function viewBooks() {
  document.querySelector(".bookView").innerHTML = `
  <p class = "bookViewTitle text-center">Book page</p>`
  document.querySelector(".mainView").innerHTML = ``;
  
  document.querySelector(".bookView").innerHTML += books.map(({ title, author, category, price }) => `
  <div class="bookItem card mt-3 w-25" align="left">
  <p><span>Title:</span> ${title}</p>
  <p><span>Author:</span> ${author}</p>
  <p><span>Category:</span> ${category}</p>
  <p><span>Price:</span> ${price}</p>
  <a class="detailsBtn btn btn-primary>Details</a>
  <a class="buyBtn btn btn-primary></a>
  </div>`).join(''); // last two are details and purhcase buttons
}

document.querySelector("#Books").onclick = function () {
  if (!seeBooks) {
    seeBooks++
  }
  start()
}

start();