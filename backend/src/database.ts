import { Tuser } from "./types"
import { Tproducts } from "./types"

export const users: Tuser[] = []
export const products: Tproducts[] = []

export function createUser(id: string, name: string, email: string, password: string) {
    const newUser: Tuser = {
        id: id,
        name: name,
        email: email,
        password: password,
        creatAt: new Date().toISOString()
    };
    users.push(newUser);
    console.log("User created!");
}

export function getAllUsers() {
    return users.map((user) => { console.log(user) })
}

export function createProduct(id: string, name: string, price: number, description: string, type: string, imageUrl1: string, imageUrl2: string, imageUrl3: string) {
    const newProduct: Tproducts = {
        id: id,
        name: name,
        price: price,
        description: description,
        type: type,
        image1: imageUrl1,
        image2: imageUrl2,
        image3: imageUrl3
    };
    products.push(newProduct);
    console.log("Product created!");
}

export function getAllProducts() {
    return products.map((product) => { console.log(product) })
}

export function searchProductByName(name: string) {
    products.filter((product) => {
        if (product.name.toLowerCase().includes(name.toLowerCase())) {
            console.log(product)
        }
    })
}