



class ZombieJar {
    constructor(itemName, itemPrice, img, itemInventory) {
        this.id = "product3"
        this.itemName = itemName || ""
        this.itemPrice = itemPrice || 0
        this.img = img || ""
        this.itemInventory = itemInventory || 0
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



export default ZombieJar
console.log("ZombieJar.js")