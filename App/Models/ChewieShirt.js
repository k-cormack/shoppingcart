




class ChewieShirt {
    constructor(itemName, itemPrice, img, smallInventory, mediumInventory, largeInventory) {
        this.id = "product1"
        this.itemName = itemName || ""
        this.itemPrice = itemPrice || 0
        this.img = img || ""
        this.sizes = {
            small: {
                inventory: smallInventory || 0,
                soldOut: false
            },
            medium: {
                inventory: mediumInventory || 0,
                soldOut: false
            },
            large: {
                inventory: largeInventory || 0,
                soldOut: false
            }
        }
        // this.itemInventoty = itemInventory || 0
        // this.soldOut = false
    }
    updateInventory(size) {
        if (this.sizes[size].soldOut) {
            return
        }
        if (this.sizes[size]) {
            this.sizes[size].inventory--
            if (this.sizes[size].inventory <= 0) {
                this.sizes[size].inventory = 0
                this.sizes[size].soldOut = true
            }
            
        }
    }
}



export default ChewieShirt
console.log("ChewieShirt.js")