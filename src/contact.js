import { content } from "./home.js"
export let contact = function(){
    const email=document.createElement("p")
    const address=document.createElement("p")
    const number=document.createElement("p")
    const disclaim=document.createElement("p")
    email.textContent="Email: nxtoan1999@gmail.com"
    address.textContent="Address: 123 Generic Avenue"
    number.textContent="Phone number: 0123456789"
    disclaim.textContent="The address and number aren't real"
    content.style.display="flex"
    content.style.flexDirection="column"
    content.append(email,address,number,disclaim)
}