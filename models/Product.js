import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    }

}, {
    toJSON: {
        transform(doc, ret) {
            // delete ret._id;
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true,
});


const Product = mongoose.model.Product || mongoose.model('Product', productSchema);

export { Product };