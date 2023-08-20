var modalWrap = null;

function showModal(title, author, category, price, description) {

  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Description: ${description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="addToCart('${title}','${price}');">Buy</button>
      </div>
    </div>
  </div>
</div>`;
 
  document.body.append(modalWrap)
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  
  modal.show();
}

function close() {
  modal.hide();
}