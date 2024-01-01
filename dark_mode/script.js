const themeToggle = document.getElementById("themeToggle");

const stored_theme = localStorage.getItem("theme");
console.log(stored_theme);

if (stored_theme === "dark") {
    document.documentElement.style.setProperty("--main-bg-color", "#000");
    document.documentElement.style.setProperty("--main-text-color", "#fff");
    themeToggle.checked = true
} else {
    document.documentElement.style.setProperty("--main-bg-color", "#fff");
    document.documentElement.style.setProperty("--main-text-color", "#000");
}

themeToggle.addEventListener("change", function () {
    // alert("clicked")
    if (this.checked) {
        console.log("Dark-theme selected");
        // alert("Light-mode")
        document.documentElement.style.setProperty("--main-bg-color", "#000");
        document.documentElement.style.setProperty("--main-text-color", "#fff");
        localStorage.setItem("theme", "dark")
    } else {
        // alert("Dark-mode")
        console.log("Light-theme selected");
        document.documentElement.style.setProperty("--main-bg-color", "#fff");
        document.documentElement.style.setProperty("--main-text-color", "#000");

        localStorage.setItem("theme", "light");
    }
});
// const themeToggle = document.getElementById("themeToggle");

// // Get the stored theme or set a default
// const storedTheme = localStorage.getItem("theme");
// console.log(storedTheme);

// if (storedTheme === "dark") {
//     document.documentElement.style.setProperty("--main-bg-color", "#000");
//     document.documentElement.style.setProperty("--main-text-color", "#fff");
// } else {
//     document.documentElement.style.setProperty("--main-bg-color", "#fff");
//     document.documentElement.style.setProperty("--main-text-color", "#000");
// }

// themeToggle.addEventListener("change", function () {
//     if (this.checked) {
//         console.log("Dark-theme selected");
//         document.documentElement.style.setProperty("--main-bg-color", "#000");
//         document.documentElement.style.setProperty("--main-text-color", "#fff");
//         localStorage.setItem("theme", "dark");
//     } else {
//         console.log("Light-theme selected");
//         document.documentElement.style.setProperty("--main-bg-color", "#fff");
//         document.documentElement.style.setProperty("--main-text-color", "#000");
//         localStorage.setItem("theme", "light");
//     }
// });
