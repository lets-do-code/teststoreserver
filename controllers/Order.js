import { Order } from "../models/index.js";

export const placeOrder = async (req, res) => {

    try {
        const { items, totalAmount } = req.body;

        const createOrder = await items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
        }))

        const order = await Order.create({
            items: createOrder,
            totalAmount: totalAmount,
        });


        return res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while creating the order', error });
    }

}



export const cancelledOrderById = async (req, res) => {
    try {

        const { id } = req.param;

        return res.status(200).json({ message: 'Order cancelled successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while cancelling the order', error });
    }
}