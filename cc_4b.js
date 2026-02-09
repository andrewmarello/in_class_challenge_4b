
//Step 2: Identify Inventory Items
let products = [
    { sku: "SKU-001", name: "EVO SL Shoes", category: "Adidas", price: 149.99, inventory: 50 },
    { sku: "SKU-002", name: "Vomero 18 Shoes", category: "Nike", price: 199.99, inventory: 50 },
    { sku: "SKU-003", name: "Aeroswift Half Tights", category: "Nike", price: 79.99, inventory: 75 },
    { sku: "SKU-004", name: "Forerunner 245 Music", category: "Garmin", price: 249.99, inventory: 40 },
    { sku: "SKU-005", name: "Boston 13 Shoes", category: "Adidas", price: 179.99, inventory: 50 }
];

//Step 3: Category Discounts (switch)
for(const p of products) {
    let discount = 0;

    switch(p.category) {
        case "Adidas":
            discount = 0.15;
            break;
        case "Nike":
            discount = 0.20;
            break;
        case "Garmin":
            discount = 0.25;
            break;
        default:
            discount = 0.0
    }
    p.promoPrice = p.price * (1-discount);
}

console.log(products);




