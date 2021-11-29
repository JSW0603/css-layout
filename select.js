const year = document.getElementsByClassName("filter-year");
const elements = document.getElementsByClassName("picture-section");

rating.addEventListener("change", function () {
  let value = year.value;
  [...elements].forEach((element) => {
    if (value === "") {
      element.classList.remove("hidden");
    } else {
      const year = element.dataset.year;
      if (!year || year < value) {
        element.classList.add("hidden");
      } else {
        element.classList.remove("hidden");
      }
    }
  });
});