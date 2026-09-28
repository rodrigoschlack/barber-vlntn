// EDITAR: nombre de usuario de Instagram (sin @)
const INSTAGRAM = "barber.vlntn";

// Convierte cada botón de agendar en un link al chat de Instagram
document.querySelectorAll("[data-wa]").forEach(function (link) {
  link.href = "https://ig.me/m/" + INSTAGRAM;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();