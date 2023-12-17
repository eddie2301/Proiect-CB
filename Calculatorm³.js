if (navigator.geolocation) {
  // this browser supports the Geolocation API, request location!
  navigator.geolocation.getCurrentPosition(
    function onSuccess(position) {
      // we successfully got the location, show local content
      loadLocalContent(position);
    }, function onError() {
      // we failed to get the location, show fallback content
      loadGlobalContent();
    });
} else {
  
  loadGlobalContent();
}


document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

 
  if (prefersDark) {
    body.classList.add("dark-mode");
  }

  
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });
});

function calculateCubicMeters() {
  const calculationType = document.getElementById("calculationType").value;
  const width = parseFloat(document.getElementById("width").value); // Convert din metri în centimetri
  const length = parseFloat(document.getElementById("length").value);
  const depth = parseFloat(document.getElementById("depth").value);

  let result;

  if (!isNaN(width) && !isNaN(length) && !isNaN(depth)) {
    if (calculationType === "Oberboden") {
      result = Math.round(width * length * depth * 1.2); // Convert înapoi în metri cubi
    } else if (calculationType === "Sand , Kiessand oder Kies") {
      result = Math.round(width * length * depth * 1.13);
    } else if (calculationType === "Grobkies , Geröll oder Schlotter") {
      result = Math.round(width * length * depth * 1.11);
    } else if (calculationType === "Lehm oder Mergel") {
      result = Math.round(width * length * depth * 1.21);
    }

    document.getElementById(
      "result"
    ).innerHTML = `Ergebnis in m³ : ${result} m³`;
  } else {
    document.getElementById("result").innerHTML =
      "Bitte geben Sie gültige Werte für Breite, Länge und Tiefe ein";
  }
}
