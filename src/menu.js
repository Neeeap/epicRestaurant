import { content } from "./home.js"
import food from "./food.jpeg"
import "./grid.css"
export const menu = function(){
for (let i =1;i<10;i++){
    const menuItem=document.createElement("div")
    menuItem.id="food"
    const foodDesc=document.createElement("p")
    const image=document.createElement("img")
    image.style.margin="auto"
    foodDesc.textContent=`Food ${i}`
    image.src=food
    menuItem.style.width="300px"
    menuItem.style.height="fit-content"
    menuItem.style.border="10px solid blue"
    menuItem.style.borderRadius="10px"
    menuItem.append(image, foodDesc)
    content.append(menuItem)
}
}