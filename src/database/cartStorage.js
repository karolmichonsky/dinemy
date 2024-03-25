export class cartStorage {
    static init() {
        if (!sessionStorage.getItem("cart")) {
            sessionStorage.setItem("cart", JSON.stringify([

            ]));
        }
    }

    static setItem(item) {
        let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        let isAdded = false;
        for (let i = 0; i < cart.length; i++) {
            if (item.choice === cart[i].choice) {
                cart[i].count += 1;
                sessionStorage.setItem("cart", JSON.stringify(cart));
                return 0;
            }
        }
        if (!isAdded) {
            item.count = 1;
            cart.push(item);
        }
        else {
        }
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    static getItem(index) {
        const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        return cart[index] || null;
    }

    static clear() {
        sessionStorage.clear();
    }

    static removeItem(index) {
        let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        cart.splice(index, 1);
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    static isEmpty() {
        const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        return cart.length === 0;
    }

    static getCart() {
        return JSON.parse(sessionStorage.getItem("cart"));
    }

    static minusDish(item) {
        const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        for (let i = 0; i < cart.length; i++) {
            if (item.title === cart[i].title) {
                cart[i].count -= 1;
                sessionStorage.setItem("cart", JSON.stringify(cart));
                if (cart[i].count === 0) {
                    this.removeItem(i);
                }
                return 0;
            }
        }
    }

    static getPrice(){
        const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        let price = 0;
        for (let i = 0; i < cart.length; i++) {
            price += cart[i].price * cart[i].count;
        }
        return Math.floor(price*100)/100;
    }
}