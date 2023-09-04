let select = document.querySelector("select");

select.addEventListener("change", changeTheme);

function changeTheme() {
  let selectedValue = select.value;
  const body = document.querySelector("body");

  if (selectedValue === "light") {
    body.setAttribute("data-theme", "light");
  } else if (selectedValue === "dark") {
    body.setAttribute("data-theme", "dark");
  } else if (selectedValue === "hawaii") {
    body.setAttribute("data-theme", "hawaii");
  } else {
    body.setAttribute("data-theme", "ocean");
  }
}
