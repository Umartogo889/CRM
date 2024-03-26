const serviceBtn = document.querySelectorAll("#ClientBtn")
const DarkBtn = document.getElementById("Dark-icon"),
    LightBtn = document.getElementById("light-icon"),
    textBlock = document.getElementById("text-block"),
    chartBox = document.getElementById("chartBox")


//  site theme
const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;


const iconToggle = () => {
    DarkBtn.classList.toggle("none")
    LightBtn.classList.toggle("none")
}

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")
        DarkBtn.classList.add("none")

    }

    else {
        LightBtn.classList.add("none")
    }
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "Light");
        iconToggle()
        return
    }
    else {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
        iconToggle()
    }
}

LightBtn.addEventListener("click", () => {
    DarkBtn.classList.add("none")
    LightBtn.classList.remove("none")
    themeSwitch()
})

DarkBtn.addEventListener("click", () => {
    DarkBtn.classList.remove("none")
    LightBtn.classList.add("none")
    themeSwitch()
})

themeCheck()


// service btn animation 
function ServiceBtnAnm() {
    serviceBtn.forEach((Btn) => {
        Btn.classList.remove("clientBtn")
    })
}

serviceBtn.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        if (e.target) {
            ServiceBtnAnm()
            btn.classList.add("clientBtn")
        }
    })

})
