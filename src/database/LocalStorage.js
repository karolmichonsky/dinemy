export class LocalStorage {
    static init() {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify({
                
            }));
        }
    }

    static setItem(key, value) {
        let temp = JSON.parse(localStorage.getItem("cart") || "{}");
        if (temp){
            temp[key] = value;
            localStorage.setItem("cart", JSON.stringify(temp));
        }
    }

    static getItem(key) {
        const item = localStorage.getItem("cart");
        return item ? JSON.parse(item)[key] : null;
    }

    static clear() {
        localStorage.clear();
    }

    static removeItem(key) {
        let temp = JSON.parse(localStorage.getItem("cart") || "{}");
        if (temp){
            delete temp[key];
            localStorage.setItem("cart", JSON.stringify(temp));
        }
    }
    
    static consoleLog() {
        console.log(JSON.parse(localStorage.getItem("cart") || "{}"));
    }
}
