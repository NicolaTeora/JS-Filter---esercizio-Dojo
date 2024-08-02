"use strict";

// Selezione degli elementi del Dom
document.getElementById("customButton").addEventListener("click", function () {
  /* Al click del bottone scatena l'evento che 
    simula un clic sull'input file nascosto */
  document.getElementById("fileInput").click();
});

// Gestione del file selezionato
document
  // Seleziona l'elemento fileInput
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    //Ottiene il primo file selezionato dall'utente
    let file = event.target.files[0];
    /*
    Verifica se il file esiste
    e se si tratta di un file immagine
    */
    if (file && file.type.startsWith("image/")) {
      //Crea un nuovo oggetto FileReader, che permette di leggere il contenuto dei file.
      let reader = new FileReader();
      reader.onload = function (e) {
        let imageUrl = e.target.result;
        /*
        Imposta l'URL dei dati come il src dell'elemento img con l'id imageDisplay, 
        in modo che l'immagine venga visualizzata nella pagina.
        */
        document.getElementById("imageDisplay").src = imageUrl;
      };
      // Avvia la lettura del file come un URL
      reader.readAsDataURL(file);
    } else {
      // Se il file non è un'immagine valida
      alert("Please select a valid image file.");
    }
  });

function updateFilters() {
  let grayscale = document.getElementById("grayscale").value;
  let saturate = document.getElementById("saturate").value;
  let sepia = document.getElementById("sepia").value;
  let invert = document.getElementById("invert").value;
  let contrast = document.getElementById("contrast").value;
  let brightness = document.getElementById("brightness").value;
  let blur = document.getElementById("blur").value;
  let hueRotate = document.getElementById("hue-rotate").value;

  let filters = `
    grayscale(${grayscale}%) 
    saturate(${saturate}%) 
    sepia(${sepia}%) 
    invert(${invert}%) 
    contrast(${contrast}%) 
    brightness(${brightness}%) 
    blur(${blur}px) 
    hue-rotate(${hueRotate}deg)
    `;

  document.getElementById("imageDisplay").style.filter = filters;
}

document.getElementById("grayscale").addEventListener("input", updateFilters);
document.getElementById("saturate").addEventListener("input", updateFilters);
document.getElementById("sepia").addEventListener("input", updateFilters);
document.getElementById("invert").addEventListener("input", updateFilters);
document.getElementById("contrast").addEventListener("input", updateFilters);
document.getElementById("brightness").addEventListener("input", updateFilters);
document.getElementById("blur").addEventListener("input", updateFilters);
document.getElementById("hue-rotate").addEventListener("input", updateFilters);
