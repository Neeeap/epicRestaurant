import food from "./food.jpeg"
import "./styles.css"
export let content=document.querySelector("#content")
export const home = function(){
    const image=document.createElement("img")
    const headline=document.createElement("h1")
    const glaze=document.createElement("p")
    content.style.display="flex"
    content.style.flexDirection="column"
    content.style.textAlign="center"
    image.style.margin="auto"
    headline.textContent="Welcome to my awesome restaurant"
    glaze.textContent="Upon entry of our luxrious restaurant, the smell of the delectable pleasantries will water your mouth INSTANTLY!"
    image.src=food
    content.append(image, headline, glaze)
}
