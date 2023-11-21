import express, { Request, Response } from "express";
import cors from "cors";
import multer, { Multer } from "multer";
import { db } from "./database/knex";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { TokenManager } from "./TokenManager";
// Remova a importação não utilizada
// import { Tproducts, Tuser } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
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

// Configuração do Multer para o upload de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });



//get all users
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

//get all products (and products by name)
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

//create user
app.post('/products', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }]), async (req, res) => {
    try {
        // Extrair dados do corpo da requisição
        const { name, price, description, type } = req.body;

        // Obter informações sobre o arquivo enviado
        const imageFiles = req.files as { [fieldname: string]: Express.Multer.File[] };
        const imageUrl1 = imageFiles['image1'];
        const imageUrl2 = imageFiles['image2'];
        const imageUrl3 = imageFiles['image3'];

        // Validações de dados
        if (!name || !price || !description || !type) {
            res.status(400).send("Campos 'name', 'price', 'description' e 'type' são obrigatórios");
            return;
        }


        // Validações de dados

        // Verifique se o ID do produto já existe (você pode ajustar isso conforme necessário)

        // Se tudo estiver válido, insira o novo produto no banco de dados
        await db("products").insert({
            id: generateProductsId(),
            name: name,
            price: price,
            description: description,
            type: type,
            image_url_1: imageUrl1 ? imageUrl1[0]?.filename : "", // Substitua "default_value" pelo valor padrão desejado
            image_url_2: imageUrl2 ? imageUrl2[0]?.filename : "",
            image_url_3: imageUrl3 ? imageUrl3[0]?.filename : "",
        });

        res.status(201).send("Produto cadastrado com sucesso");
    } catch (error: any) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

//edit product by id('/products', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), async (req, res)
app.put('/product/:id', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }]), async (req, res) => {
    try {
        const idToEdit = req.params.id;
        const newName = req.body.name as string | undefined;
        const newPrice = req.body.price as number | undefined;
        const parsedPrice = Number(newPrice);
        const newDescription = req.body.description as string | undefined;

        const imageFiles = req.files as { [fieldname: string]: Express.Multer.File[] };
        const imageUrl1 = imageFiles && imageFiles['image1'] ? imageFiles['image1'][0]?.filename : undefined;
        const imageUrl2 = imageFiles && imageFiles['image2'] ? imageFiles['image2'][0]?.filename : undefined;
        const imageUrl3 = imageFiles && imageFiles['image3'] ? imageFiles['image3'][0]?.filename : undefined;


        if (typeof newName !== "string" && typeof newName !== "undefined") {
            res.statusCode = 404;
            throw new Error("'name' deve ser uma string");
        }
        if (typeof parsedPrice !== "number" && typeof parsedPrice !== "undefined") {
            res.statusCode = 404;
            throw new Error("'price' deve ser um number");
        }
        if (typeof newDescription !== "string" && typeof newDescription !== "undefined") {
            res.statusCode = 404;
            throw new Error("'description' deve ser uma string");
        }

        const [product] = await db.raw(`
        SELECT * FROM products
        WHERE id = "${idToEdit}";
        `);

        if (!product) {
            res.status(404);
            throw new Error("'id' não encontrada");
        } else {
            await db.raw(`
            UPDATE products
            SET
            name = "${newName || product.name}",
            price = "${isNaN(Number(parsedPrice)) ? product.price : parsedPrice as number}",
            description = "${newDescription || product.description}",
            image_url_1 = "${imageUrl1 ? imageUrl1 : product.image_url_1}",
            image_url_2 = "${imageUrl2 ? imageUrl2 : product.image_url_2}",
            image_url_3 = "${imageUrl3 ? imageUrl3 : product.image_url_3}"
            WHERE id = "${idToEdit}";
            `);
        }

        res.status(200).send({ message: "Atualização realizada com sucesso" });

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

        // Validações básicas
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            return res.status(400).send("Campos 'name', 'email' e 'password' são obrigatórios e devem ser strings");
        }

        // Verificar se o e-mail já está cadastrado
        const [existingUser] = await db("users").where({ email });

        if (existingUser) {
            return res.status(409).send("E-mail já cadastrado");
        }

        // Inserir novo usuário no banco de dados
        const newUser = {
            id: generateUserId(),
            name,
            email,
            password,  // Em produção, use bcrypt para armazenar senhas de forma segura
            created_at: new Date().toISOString()
        };

        await db("users").insert(newUser);

        // Gerar token JWT
        const token = tokenManager.createToken({ id: newUser.id, name: newUser.name });

        res.status(201).json({ message: "Cadastro realizado com sucesso", token });
    } catch (error: any) {
        console.error(error);
        res.status(500).send(error.message);
    }
});


app.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Validações básicas
        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).send("Campos 'email' e 'password' são obrigatórios");
        }

        // Buscar usuário pelo e-mail
        const [user] = await db("users").where({ email });

        if (!user || user.password !== password) {
            return res.status(401).send("Credenciais inválidas");
        }

        // Gerar token JWT
        const token = tokenManager.createToken({ id: user.id, name: user.name });

        res.status(200).json({ message: "Login bem-sucedido", token });
    } catch (error: any) {
        console.error(error);
        res.status(500).send(error.message);
    }
});


//delete user by id
app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        const [user] = await db("users").where({ id: idToDelete })
        if (!user) {
            res.status(404)
            throw new Error("'id' não encontrada")
        }

        await db("users").del().where({ id: idToDelete })

        res.status(200).send("User apagado com sucesso")
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

//delete product by id
app.delete('/products/:id', async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        const [product] = await db("products").where({ id: idToDelete })
        if (!product) {
            res.status(404)
            throw new Error("'id' não encontrada")
        }

        await db("products").del().where({ id: idToDelete })

        res.status(200).send("Produto apagado com sucesso")
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})


// get all purchases
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

// get purchases by id
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

// create purchase
app.post('/purchases', async (req: Request, res: Response) => {
    try {
        const { buyer, products } = req.body;

        // Validações de dados
        if (!buyer || !products || !Array.isArray(products) || products.length === 0) {
            res.status(400).send("Campos 'buyer' e 'products' são obrigatórios e 'products' deve ser uma lista não vazia");
            return;
        }
        if (typeof buyer !== "string") {
            res.statusCode = 404
            throw new Error("'buyer' deve ser uma string")
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

//delete purchase by id
app.delete('/purchases/:id', async (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        const [purchase] = await db.raw(`
        SELECT * FROM purchases
        WHERE id = "${idToDelete}";
          `)

        if (!purchase) {
            res.status(404)
            throw new Error("'id' não encontrada")
        }
        await db.raw(`
        DELETE FROM purchases
        WHERE id = "${idToDelete}";
        `)
        res.status(200).send({ message: "Purchase deletada com sucesso" })

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})