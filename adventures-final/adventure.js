/* // script.js
const showContentBtn = document.getElementById('showContentBtn');
const content = document.getElementById('content');

showContentBtn.addEventListener('click', () => {
  if (content.style.display === 'none') {
    content.style.display = 'block';
    showContentBtn.textContent = 'Hide description';
  } else {
    content.style.display = 'none';
    showContentBtn.textContent = 'Show desription';
  }
}); */


function toggleContent(id) {
  var content = document.getElementById("content" + id);
  content.classList.toggle("hidden");
}




