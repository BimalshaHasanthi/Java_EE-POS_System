function ItemDTO(code,name,price,qty) {
    this.itemCode = code;
    this.itemName = name;
    this.itemPrice = price;
    this.itemQty = qty;

    this.setCode = function (code) {
        this.itemCode = code;
    }
    this.getCode = function () {
        return this.itemCode;
    }

    this.setName = function (name) {
        this.itemName = name;
    }
    this.getName = function () {
        return this.itemName;
    }

    this.setPrice = function (price) {
        this.itemPrice = price;
    }
    this.getPrice = function () {
        return this.itemPrice;
    }

    this.setQty= function (qty) {
        this.itemQty = qty;
    }
    this.getQty = function () {
        return this.itemQty;
    }


}





