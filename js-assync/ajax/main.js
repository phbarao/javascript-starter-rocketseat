var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/phbarao");
xhr.send(null);

xhr.onreadystatechange = function () {
  // Verificacao
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
