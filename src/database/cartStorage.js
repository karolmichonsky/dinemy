export class cartStorage {
    static init() {
        if (!sessionStorage.getItem("cart")) {
            sessionStorage.setItem("cart", JSON.stringify([
                
            ]));
        }
    }

    static setItem(item) {
        let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        cart.push(item);
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
    
    static consoleLog() {
        console.log(JSON.parse(sessionStorage.getItem("cart") || "[]"));
    }
}