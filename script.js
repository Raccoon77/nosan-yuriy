const footerDate = document.getElementById("footerDate");
footerDate.innerHTML = `&copy;  Yuriy Nosan`;

const getCVButton = document.getElementById('download');

getCVButton.addEventListener('click', () => {
  window.open('./CV.docx');
});
