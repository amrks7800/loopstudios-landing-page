const toggleNav = document.querySelector(".nav-toggle")
const primaryNav = document.querySelector("#primary-nav")

toggleNav.addEventListener("click", () => {
  const primaryNavVisibility =
    primaryNav.getAttribute("data-visible")

  if (primaryNavVisibility === "false") {
    primaryNav.setAttribute("data-visible", true)
    toggleNav.setAttribute("aria-expanded", true)
  } else {
    primaryNav.setAttribute("data-visible", false)
    toggleNav.setAttribute("aria-expanded", false)
  }
})
