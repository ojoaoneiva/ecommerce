-- Active: 1699987864744@@127.0.0.1@3306

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO
    users (id, name, email, password)
VALUES ( 'adm',
        'Admin',
        'admin@email.com',
        'admin123'
    );

INSERT INTO
    users (name, email, password)
VALUES (
        'Maria',
        'maria@email.com',
        'maria123'
    ), (
        'Lucas',
        'lucas@email.com',
        'lucas123'
    ), (
        'Diego',
        'diego@email.com',
        'diego123'
    );

CREATE TABLE
    products (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL,
        type TEXT NOT NULL,
        image_url_1 TEXT NOT NULL,
        image_url_2 TEXT NOT NULL,
        image_url_3 TEXT NOT NULL,
    );

INSERT INTO
    products (
        id,
        name,
        price,
        description,
        type,
        image_url
    )
VALUES (
        'prod001',
        'Mouse gamer',
        250,
        'Melhor mouse do mercado!',
        'https://picsum.photos/seed/Mouse%20gamer/400'
    ), (
        'prod002',
        'Monitor',
        900,
        'Monitor LED Full HD 24 polegadas',
        'https://picsum.photos/seed/Monitor/400'
    ), (
        'prod003',
        'Fone de ouvido',
        50,
        'Fone sem fio com microfone',
        'https://picsum.photos/seed/Fone%20deouvido/400'
    ), (
        'prod004',
        'Mesa digitalizadora',
        500,
        'Mesa digitalizadora ideal para designers e artistas digitais',
        'https://picsum.photos/seed/Mesa%20digitalizadora/400'
    ), (
        'prod005',
        'Kindle',
        340,
        'Kindle para estimular a leitura em qualquer lugar',
        'https://picsum.photos/seed/Kindle%20/400'
    );

INSERT INTO
    products (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        'prod006',
        'Caixa de som',
        600,
        'Som em alta qualidade',
        'https://picsum.photos/seed/Caixa%20desom/400'
    );

DELETE FROM users WHERE id = 'u004';

DELETE FROM products WHERE id = 'prod006';

UPDATE products
SET
    name = 'Kindle 2',
    price = 380,
    description = 'Kindle 2. Nova versão para estimular a leitura em qualquer lugar',
    image_url = 'https://picsum.photos/seed/Kindle%20novo/400'
WHERE id = 'prod005';