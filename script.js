let container = document.querySelector(".container");
let input = document.querySelector("#text");
let searchBtn = document.querySelector("#button");
let div = document.createElement("div");
div.classList.add("show");
container.appendChild(div);

const fetchdata = async (searchInput) => {
  let data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
  );
  const response = await data.json();
  console.log(response);

  const datapp = response[0].meanings[0].definitions[0].definition;

  div.innerHTML = `<h3>${searchInput}:</h3> ${datapp}`;
  div.style.display = "block";
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = input.value.trim();
  fetchdata(searchInput);
  console.log(searchInput);
  input.innerText = ""
});
