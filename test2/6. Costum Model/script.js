var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};