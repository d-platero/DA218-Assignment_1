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

function viewBooks() {
  document.querySelector(".bookView").innerHTML = `
  <p class = "BookViewTitle text-center">Book page</p>
  <p></p>`
  document.querySelector(".mainView").innerHTML = ``;
  
  document.querySelector(".bookView").innerHTML += ``
}

start();