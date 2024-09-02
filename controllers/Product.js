import { Product } from "../models/index.js"
export const addProduct = async (req, res) => {

    try {

        const { name, type, price, currency, color, gender, quantity, imageURL } = req.body;


        const existingProduct = await Product.find({ name: name, type: type })

        if (existingProduct.length > 0) {
            return res.status(409).json({ message: 'Product already exist in the database' })
        }


        const newProduct = await Product.create({
            name: name,
            type: type,
            price: price,
            currency: currency,
            color: color,
            gender: gender,
            quantity: quantity,
            imageURL: imageURL
        });

        return res.status(201).json({ message: 'Product added successfully', product: newProduct })

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }

}


export const getAllProducts = async (req, res) => {

    try {
        const getallProducts = await Product.find({});

        return res.status(200).json({ message: "Product fetched successfully", products: getallProducts });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}




export const getProductById = async (req, res) => {
    return res.status(200).json({ message: 'Product listed successfully by Id' });
}




export const insertMany = async (req, res) => {
    try {

        const products = [
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
                "name": "Black Polo",
                "type": "Polo",
                "price": 250,
                "currency": "INR",
                "color": "Black",
                "gender": "Men",
                "quantity": 3
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png",
                "name": "Blue Polo",
                "type": "Polo",
                "price": 350,
                "currency": "INR",
                "color": "Blue",
                "gender": "Women",
                "quantity": 3
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/pink-polo-women.png",
                "name": "Pink Polo",
                "type": "Polo",
                "price": 350,
                "currency": "INR",
                "color": "Pink",
                "gender": "Women",
                "quantity": 6
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-men.png",
                "name": "Black Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Black",
                "gender": "Men",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/green-polo-men.png",
                "name": "Green Polo",
                "type": "Polo",
                "price": 250,
                "currency": "INR",
                "color": "Green",
                "gender": "Men",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/green-polo-women.png",
                "name": "Green Polo",
                "type": "Polo",
                "price": 350,
                "currency": "INR",
                "color": "Green",
                "gender": "Women",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-hoodie-women.png",
                "name": "Blue Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Blue",
                "gender": "Women",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-women.png",
                "name": "Black Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Black",
                "gender": "Women",
                "quantity": 5
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-round-men.png",
                "name": "Blue Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Blue",
                "gender": "Men",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-round-women.png",
                "name": "Red Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Red",
                "gender": "Women",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-round-men.png",
                "name": "Grey Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Grey",
                "gender": "Men",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/purple-hoodie-women.png",
                "name": "Purple Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Purple",
                "gender": "Women",
                "quantity": 3
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-round-women.png",
                "name": "Grey Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Grey",
                "gender": "Women",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-round-women.png",
                "name": "White Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "White",
                "gender": "Women",
                "quantity": 0
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-round-men.png",
                "name": "Black Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Black",
                "gender": "Men",
                "quantity": 7
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/purple-round-men.png",
                "name": "Purple Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Purple",
                "gender": "Men",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-round-men.png",
                "name": "White Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "White",
                "gender": "Men",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-round-women.png",
                "name": "Blue Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Blue",
                "gender": "Women",
                "quantity": 3
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/yellow-hoodie-women.png",
                "name": "Yellow Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Yellow",
                "gender": "Women",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-polo-women.png",
                "name": "White Polo",
                "type": "Polo",
                "price": 350,
                "currency": "INR",
                "color": "White",
                "gender": "Women",
                "quantity": 4
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-polo-men.png",
                "name": "Red Polo",
                "type": "Polo",
                "price": 250,
                "currency": "INR",
                "color": "Red",
                "gender": "Men",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-hoodie-men.png",
                "name": "Blue Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Blue",
                "gender": "Men",
                "quantity": 0
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-hoodie-men.png",
                "name": "Grey Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "Grey",
                "gender": "Men",
                "quantity": 2
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-polo-men.png",
                "name": "Grey Polo",
                "type": "Polo",
                "price": 300,
                "currency": "INR",
                "color": "Grey",
                "gender": "Men",
                "quantity": 3
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-hoodie-men.png",
                "name": "Red Hoodie",
                "type": "Hoodie",
                "price": 300,
                "currency": "INR",
                "color": "Red",
                "gender": "Men",
                "quantity": 0
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-polo-men.png",
                "name": "White Polo",
                "type": "Polo",
                "price": 300,
                "currency": "INR",
                "color": "White",
                "gender": "Men",
                "quantity": 1
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-hoodie-women.png",
                "name": "White Hoodie",
                "type": "Hoodie",
                "price": 500,
                "currency": "INR",
                "color": "White",
                "gender": "Women",
                "quantity": 3
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-round-men.png",
                "name": "Grey Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Grey",
                "gender": "Men",
                "quantity": 0
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-round-women.png",
                "name": "Black Round",
                "type": "Basic",
                "price": 300,
                "currency": "INR",
                "color": "Black",
                "gender": "Women",
                "quantity": 0
            },
            {
                "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-women.png",
                "name": "Black Polo",
                "type": "Polo",
                "price": 300,
                "currency": "INR",
                "color": "Black",
                "gender": "Women",
                "quantity": 4
            }
        ]
        Product.insertMany(products)
            .then((product) => {
                console.log('Data inserted successfully:', product);
            })
            .catch((err) => {
                console.error('Error inserting data:', err);
                // Optional: Close the connection in case of error
            });
    } catch (error) {
        console.log("Internal server error");
    }

}