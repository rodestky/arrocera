// URLs de los mapas de Google con las direcciones proporcionadas
const youtubeVideo = document.getElementById("youtubeVideo");
const mapData = [
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.127027999192!2d-70.6534846!3d-33.4459969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a764ed81c7%3A0x36c2c3fabe4fe5a5!2sP.%C2%BA%20Bulnes%2079%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700683663746!5m2!1ses!2scl",
    title: "Central office",
    description: "Central Address  of the company",
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.4980683346334!2d-70.6313108!3d-33.46238119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c567a5515b67%3A0x74cd64c536ffbaa5!2sMiguel%20Le%C3%B3n%20Prado%20225%2C%208360218%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700747247985!5m2!1ses!2scl",
    title: "Downtown warehouse",
    description: "Central warehouse for product storage.",
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7266808841673!2d-70.99784562349062!3d-34.58578175655269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664901b4645be95%3A0x98316bc567a1cd68!2sAv.%20Manuel%20Rodr%C3%ADguez%20183%2C%20San%20Fernando%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1700747339288!5m2!1ses!2scl",
    title: "Planta San Fernando",
    description: "Production plant located in San Fernando.",
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.777587607902!2d-70.84845902427047!3d-34.35613817304408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96636194cfe897c1%3A0xbd6f88cd3abd3999!2sPetrobras!5e0!3m2!1ses!2scl!4v1700747389604!5m2!1ses!2scl",
    title: "Planta Rosario",
    description: "Production plant located in Rosario.",
  },
];

// Función para cargar el mapa y actualizar el contenido de la tarjeta
function loadMapAndCard(index) {
  const mapDiv = document.getElementById(`map-${index}`);
  const titleElement = document.querySelector(`#card-${index} h2`);
  const descriptionElement = document.querySelector(`#card-${index} p`);

  mapDiv.innerHTML = `<iframe src="${mapData[index].url}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  titleElement.textContent = mapData[index].title;
  descriptionElement.textContent = mapData[index].description;
}

// Cargar el primer mapa y contenido al cargar la página
window.onload = function () {
  for (let i = 0; i < mapData.length; i++) {
    loadMapAndCard(i);
  }
};
