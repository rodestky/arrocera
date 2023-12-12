function changeLanguage(language) {
  let redirectPage;

  switch (language) {
    case "es":
      redirectPage = "../index.html";
      break;
    case "en":
      redirectPage = "../pages/inglesHome.html";
      break;
    case "eshisto":
      redirectPage = "../pages/espanolhistoria.html";
      break;
    case "enhisto":
      redirectPage = "../pages/ingleshistoria.html";
      break;
    case "escontacto":
      redirectPage = "../pages/espanolcontacto.html";
      break;
    case "encontacto":
      redirectPage = "../pages/inglescontacto.html";
      break;
    case "escon":
      redirectPage = "../pages/espanolConvenio.html";
      break;
    case "encon":
      redirectPage = "../pages/inglesconvenio.html";
      break;
    default:
      // Página predeterminada si no coincide con ningún caso
      redirectPage = "../index.html";
      break;
  }

  window.location.href = redirectPage;
}
