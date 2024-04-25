function editCollection(collection,value,type,specify = null) {
  for (let i = 0; i < collection.length; i++) {
    if specify !== null:
       if i === specify:
          if (type == 1) {collection[i] = value}
          else if (type == 2) {collection[i].style.display = value}
          else console.error("Unknown argument in editCollection()")
    else:
      if (type == "1") {collection[i] = value}
      else if (type == "2") {collection[i].style.display = value}
      else console.error("Unknown argument in editCollection()")
  }
  return collection
}

const loginRequired = document.getElememtByClassName("login")
const forbidLogin = document.getElementByClassName("no-login")
const startGame = document.getElementById("openGame")

startGame.addEventListener("click", function() {
  document.location.replace("game.html")
},false)

if (localStorage.getItem("user") === undefined) {
  editCollection(loginRequired,none,2)
  editCollection(forbidLogin,block,2)
} else {
  editCollection(loginRequired,block,2)
  editCollection(forbidLogin,none,2)
}
