



class FaceHugger {
    constructor(itemName, itemPrice, img, itemInventory) {
        this.id = "product2"
        this.itemName = itemName || ""
        this.itemPrice = itemPrice || 0
        this.img = img || ""
        this.itemInventory = itemInventory || 0
        this.soldOut = false
    }
    updateInventory(id){
        if (this.soldOut) {
            return
        }
        if (this.id) {
            this.itemInventory--
            if (this.itemInventory <=0) {
                this.itemInventory = 0
                this.soldOut = true
            }
        }

    }
}



export default FaceHugger
console.log("FaceHugger.js")