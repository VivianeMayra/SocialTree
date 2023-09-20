function changeTheme() {
  const html = document.documentElement

  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
  } else {
    html.classList.add("dark")
  }

  const img = document.querySelector(".container-circle img")

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./image/avatar.jpg")
  } else {
    img.setAttribute("src", "./image/avatar-light.png")
  }
}
