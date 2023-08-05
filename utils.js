const raw = window.location.href
const url = new URL(raw)
const username = url.searchParams.get("username")
const id = url.searchParams.get("id")
const avatarUrl = url.searchParams.get("avatar")

const usernameField = document.getElementById("username");
const idField = document.getElementById("id");
const avatarField = document.getElementById("avatar");
usernameField.innerHTML = "Discord Username: " + username
idField.innerHTML = "Discord ID: " + id
avatarField.src = avatarUrl
