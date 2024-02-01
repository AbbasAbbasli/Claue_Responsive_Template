var minicard = document.querySelector(".minicard")

var opener = document.getElementById("shopping-bag")

var closer = document.getElementById("closer")

var secondOpener = document.querySelector("#listWrapper>ul>li:nth-child(3)>a")

opener.addEventListener("click", function() {
    if (minicard.classList.contains("open") == false) {
        minicard.classList.add("open")
    }
})

secondOpener.addEventListener("click", function() {
    if (minicard.classList.contains("open") == false) {
        minicard.classList.add("open")
    }
})

closer.addEventListener("click", function() {
    if (minicard.classList.contains("open") == true) {
        minicard.classList.remove("open")
    }
})