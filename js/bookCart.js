var bookCart = []
var number = 0
var total = 0

// Use number to count how many books if its the same book
function addBook(title, price, image) {
  let book = {
    title: title,
    price: price,
    number: number,
    image: image
  }
  if (!bookCart.some(elem => elem.title === title)) {
    bookCart.push(book)
  }
  bookCart.filter((elem) => { return elem.title === title })[0].number++
  
  total += parseInt(book.price);

  // Fix this so total appears at end
  document.querySelector(".totalPrice").innerHTML = `<span style="font-weight: bold">TOTAL: </span><p>${total}</p>`


  // add image later when done
  var html = bookCart.map(({title, price, number, image}) =>
    `<tr>
      <td><img class="img-fluid" src="${image}"></img></td>
      <td>${title}</td>
      <td>${price}</td>
      <td>${number}</td>
      <td>${(price * number)}</td>
     </tr>`
  )
    document.querySelector('.cartItem').innerHTML = html.join('')
}

