var bookCart = []
var number = 0
var total = 0

// Use number to count how many books if its the same book
function addBook(title, price) {
  let book = {
    title: title,
    price: price,
    number: number
  }
  if (!bookCart.some(elem => elem.title === title)) {
    bookCart.push(book)
  }
  bookCart.filter((elem) => { return elem.title === title }).number++
  
  total += book.price;

  document.querySelector(".totalPrice").innerHTML = `<div><p>${total}</p></div>`


  var html = bookCart.map(({ title, price, number }) =>
    `<div class="cartItem">
    <p>Title: ${title}</p>
    <p>Price: ${price}</p>
    <p>Number: ${number}</p>
    <p>Row sum: ${(price * number)} </p>`
  )
    document.querySelector('.cartItem').innerHTML = html.join('')
}

