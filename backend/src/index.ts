import express, { Request, Response } from "express";
import cors from "cors";
import multer, { Multer } from "multer";
import { db } from "./database/knex";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { TokenManager } from "./TokenManager";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

app.listen(Number(process.env.PORT), () => {
    console.log(`Server running on Port ${Number(process.env.PORT)}`);
});

function generateUserId(): string {
    return 'u' + uuidv4().slice(0, 16);;
}
function generateProductsId(): string {
    return 'p' + uuidv4().slice(0, 16);;
}
function generatePurchasesId(): string {
    return 'c' + uuidv4().slice(0, 16);;
}

const tokenManager = new TokenManager();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.get("/users", async (req: Request, res: Response) => {
    try {
        const result = await db("users")

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get("/products", async (req: Request, res: Response) => {
    try {
        const nameToFind = req.query.name as string
        if (nameToFind) {
            const result = await db("products")
                .select()
                .where("name", "LIKE", `%${nameToFind}%`)
            res.status(200).send(result)
        } else {
            const result = await db("products")
            res.status(200).send(result)
        }
    }
    catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.post('/products', async (req, res) => {
    try {
        const { name, price, description, type, imageURL1, imageURL2, imageURL3 } = req.body;

        if (!name || !price || !description || !type) {
            res.status(400).send("Fields: 'name', 'price', 'description', and 'type' are required");
            return;
        }

        await db("products").insert({
            id: generateProductsId(),
            name: name,
            price: price,
            description: description,
            type: type,
            image_url_1: imageURL1,
            image_url_2: imageURL2,
            image_url_3: imageURL3,
        });

        res.status(201).send("Product created!");
    } catch (error: any) {
        console.log(error);
        res.status(500).send(error.message);
    }
});


app.put('/product/:id', async (req, res) => {
    try {
        const idToEdit = req.params.id;
        const newName = req.body.name as string | undefined;
        const newPrice = req.body.price as number | undefined;
        const parsedPrice = Number(newPrice);
        const newDescription = req.body.description as string | undefined;
        const imageURL1 = req.body.imageURL1 as string;
        const imageURL2 = req.body.imageURL2 as string;
        const imageURL3 = req.body.imageURL3 as string;

        if (typeof newName !== "string" && typeof newName !== "undefined") {
            res.statusCode = 404;
            throw new Error("'name' must be a string");
        }
        if (typeof parsedPrice !== "number" && typeof parsedPrice !== "undefined") {
            res.statusCode = 404;
            throw new Error("'price' must be a number");
        }
        if (typeof newDescription !== "string" && typeof newDescription !== "undefined") {
            res.statusCode = 404;
            throw new Error("'description' must be a string");
        }

        const [product] = await db.raw(`
        SELECT * FROM products
        WHERE id = "${idToEdit}";
        `);
        if (!product) {
            res.status(404);
            throw new Error("'id' not found");
        } else {
            await db.raw(`
            UPDATE products
            SET
            name = "${newName || product.name}",
            price = "${isNaN(Number(parsedPrice)) ? product.price : parsedPrice as number}",
            description = "${newDescription || product.description}",
            image_url_1 = "${imageURL1 || product.image_url_1}",
            image_url_2 = "${imageURL2 || product.image_url_2}",
            image_url_3 = "${imageURL3 || product.image_url_3}"
            WHERE id = "${idToEdit}";
            `);
        }

        res.status(200).send({ message: "Product updated!" });

    } catch (error: any) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});

app.post('/signup', async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            return res.status(400).send("Fields 'name', 'email' and 'password' are required and must be strings");
        }
        const [existingUser] = await db("users").where({ email });
        if (existingUser) {
            return res.status(409).send("E-mail aready used");
        }

        const newUser = {
            id: generateUserId(),
            name,
            email,
            password,
            created_at: new Date().toISOString()
        };

        await db("users").insert(newUser);

        const token = tokenManager.createToken({ id: newUser.id, name: newUser.name });

        res.status(201).json({ message: "User created!", token });
    } catch (error: any) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).send("Campos 'email' and 'password' are required");
        }

        const [user] = await db("users").where({ email });

        if (!user || user.password !== password) {
            return res.status(401).send("Invalid email and/or password");
        }

        const token = tokenManager.createToken({ id: user.id, name: user.name });

        res.status(200).json({ message: "Login succesfully!", token });
    } catch (error: any) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        const [user] = await db("users").where({ id: idToDelete })
        if (!user) {
            res.status(404)
            throw new Error("'id' not found")
        }

        await db("users").del().where({ id: idToDelete })
        res.status(200).send("User deleted!")

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.delete('/products/:id', async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        const [product] = await db("products").where({ id: idToDelete })
        if (!product) {
            res.status(404)
            throw new Error("'id' not found")
        }

        await db("products").del().where({ id: idToDelete })
        res.status(200).send("Product deleted")

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get("/purchases", async (req: Request, res: Response) => {
    try {
        const result = await db("purchases")
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get("/purchases/:id", async (req: Request, res: Response) => {
    try {
        const idToFind = req.params.id as string
        if (idToFind) {
            const [purchase] = await db("purchases")
                .select(
                    "id AS purchaseId",
                    "buyer AS buyerId",
                    "total_price AS totalPrice",
                    "created_at AS createdAt"
                ).where({ id: idToFind })

            const [buyer] = await db("users").where({ id: purchase.buyerId })
            purchase.buyerName = buyer.name
            purchase.buyerEmail = buyer.email

            const purchasedProducts = await db("purchases_products").where({ purchase_id: idToFind })
            const productCompleteInfo = []

            for (let product of purchasedProducts) {
                const [productInfo] = await db("products").where({ id: product.product_id })
                productCompleteInfo.push({ ...productInfo, quantity: product.quantity })
            }

            const resultArray = []
            resultArray.push({ ...purchase, products: productCompleteInfo })
            const result = resultArray[0]

            res.status(200).send(result)
        }
        else {
            const result = await db("purchases")
            res.status(200).send(result)
        }

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.post('/purchases', async (req: Request, res: Response) => {
    try {
        const { buyer, products } = req.body;

        if (!buyer || !products || !Array.isArray(products) || products.length === 0) {
            res.status(400).send("Fields 'buyer' and 'products' are required and 'products' must be a array with at least one element");
            return;
        }
        if (typeof buyer !== "string") {
            res.statusCode = 404
            throw new Error("'buyer' must be a string")
        }

        let newProducts = []
        let total: number = 0

        for (let product of products) {
            const [prod] = await db.raw(`
	        SELECT * FROM products
            WHERE id = "${product.id}";
        `)
            newProducts.push({ ...prod, quantity: product.quantity })
        }

        for (let product of newProducts) {
            total += product.price * product.quantity
        }

        const Id = generatePurchasesId();

        await db.raw(`
        INSERT INTO purchases (id, buyer, total_price, created_at)
        VALUES ("${Id}","${buyer}", "${total}", "${new Date().toISOString()}");
    `)
        for (let product of products) {
            await db.raw(`
        INSERT INTO purchases_products (purchase_id, product_id, quantity)
        VALUES ( "${product.id}", ${product.quantity});
    `)
        }
        res.status(201).send(`Pedido realizado com sucesso`)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
}
)

app.delete('/purchases/:id', async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        const [purchase] = await db.raw(`
        SELECT * FROM purchases
        WHERE id = "${idToDelete}";
          `)

        if (!purchase) {
            res.status(404)
            throw new Error("'id' not found")
        }
        await db.raw(`
        DELETE FROM purchases
        WHERE id = "${idToDelete}";
        `)
        res.status(200).send({ message: "Purchase deleted" })

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})