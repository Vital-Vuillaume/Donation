//------Https------\\

/*if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}*/

const blockImg = document.querySelector(".blockImg");
const btn = document.querySelector(".imgCopie");
const txt = document.querySelector(".txtBtc");
const img = document.querySelector(".imgQr");

blockImg.onclick = function() {
  btn.classList.add("active");
  navigator.clipboard.writeText(txt.textContent);

  setTimeout(function() {
    btn.classList.remove("active");
  }, 2500);
};

img.onclick = function() {
  img.classList.toggle("active");
};