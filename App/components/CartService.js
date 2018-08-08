import StoreFront from "../models/Store.js"
import ChewieShirt from "../models/ChewieShirt.js";
import FaceHugger from "../models/FaceHugger.js";
import ZombieJar from "../models/ZombieJar.js";

let chewieShirt = new ChewieShirt("Chewie is my Co-Pilot!", 14, "./Assets/chewie-co-pilot-tee-dd.jpg", 10, 15, 17)
let faceHugger = new FaceHugger("Facehugger Coffee Mug", 15, "./App/Assets/alien_mug.jpg", 9)
let zombieJar = new ZombieJar("Zombie Cookie Jar", 22, "./App/Assets/zombie_head_cookie_jar2.jpg", 16)



class CartService {
    constructor() {

    }
    purchase(chewieShirt, size) {
        chewieShirt.purchase(chewieShirt, size)
    }
    get ChewieShirt() {
        return {
            name: chewieShirt.itemName,
            price: chewieShirt.itemPrice,
            size: chewieShirt.sizes.size,
            soldOut: chewieShirt.sizes.size.soldOut,
            img: chewieShirt.img
        }
    }

    purchase(type) {
        faceHugger.purchase(type)
    }
    get FaceHugger() {
        return {
            name: faceHugger.itemName,
            price: faceHugger.itemPrice,
            soldOut: faceHugger.soldOut,
            img: faceHugger.img
        }
    }
}



export default CartService

console.log("CartService.js")