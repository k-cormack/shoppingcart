import "./ChewieShirt.js"
import "./FaceHugger.js"
import "./ZombieJar.js"




class StoreFront {
    constructor(productName, grossRevenue) {
        this.productName = productName || ""
        this.grossRevenue = grossRevenue || 0
    }
}


export default StoreFront
console.log("Store.js")