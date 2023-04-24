const fileInput = document.getElementById('myfile');
const imgPreview = document.getElementById('image-preview');
const clearBtn = document.getElementById('clear-btn');

//Implementa a função de prévia da imagem

fileInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      imgPreview.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(file);
  }
});

//Botão de limpar a prévia da imagem

clearBtn.addEventListener('click', function() {
    imgPreview.removeAttribute('src');
    fileInput.value = null;
  });