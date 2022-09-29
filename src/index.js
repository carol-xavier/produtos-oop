export class Item {
    constructor(category, description, price) {
        this.category = category;
        this.description = description;
        this.price = price;
    }
}

export class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        let sum = 0;
        this.items.forEach((item) => { sum += item.price });
        return sum;
    }

    getTaxes() {
        let sum = 0;
        this.items.map((item) => {
            if (item.category === 'Beer') sum += (item.price * 0.20)
            if (item.category === 'Cigar') sum += (item.price * 0.25)
            if (item.category === 'Eletronics') sum += (item.price * 0.30)
        })

        return sum;
    }
}