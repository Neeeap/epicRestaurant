import { home, content } from "./home.js"
import { menu } from "./menu.js"
import { contact } from "./contact.js"
home()
document.querySelector("#home").addEventListener("click", () =>{
    content.replaceChildren()
    content.removeAttribute("style")
    home()
})
document.querySelector("#menu").addEventListener("click", () =>{
    content.replaceChildren()
    content.removeAttribute("style")
    menu()
})
document.querySelector("#contact").addEventListener("click", () =>{
    content.replaceChildren()
    content.removeAttribute("style")
    contact()
})
