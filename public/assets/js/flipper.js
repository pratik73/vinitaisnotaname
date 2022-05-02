(function ($) {
  const digitEle = document.getElementById("digit");
  const digit = parseInt(localStorage.getItem("digit") || digitEle.innerHTML);

  localStorage.setItem("digit", digit + 1);

  digitEle.innerHTML = digit + 1;
})();
