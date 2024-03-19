export class cartStorage {
    static init() {
        if (!sessionStorage.getItem("cart")) {
            sessionStorage.setItem("cart", JSON.stringify({
                
            }));
        }
    }

    static setItem(key, value) {
        let temp = JSON.parse(sessionStorage.getItem("cart") || "{}");
        if (temp){
            temp[key] = value;
            sessionStorage.setItem("cart", JSON.stringify(temp));
        }
    }

    static getItem(key) {
        const item = sessionStorage.getItem("cart");
        return item ? JSON.parse(item)[key] : null;
    }

    static clear() {
        sessionStorage.clear();
    }

    static removeItem(key) {
        let temp = JSON.parse(sessionStorage.getItem("cart") || "{}");
        if (temp){
            delete temp[key];
            localStorage.setItem("cart", JSON.stringify(temp));
        }
    }
    
    static consoleLog() {
        console.log(JSON.parse(sessionStorage.getItem("cart") || "{}"));
    }
}
