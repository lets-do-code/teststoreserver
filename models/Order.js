import mongoose from "mongoose";


const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
    {
        toJSON: {
            transform(doc, ret) {
                delete ret._id;

            }
        },
    });


const orderSchema = new mongoose.Schema({
    items: [orderItemSchema],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Completed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret._id;
            delete ret.__v;
        }
    },
});

const Order = mongoose.model.Order || mongoose.model('Order', orderSchema);

export { Order };