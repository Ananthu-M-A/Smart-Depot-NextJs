import IProduct from '@/interfaces/product.interface';
import { model, models, Schema } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    imageUrls: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    warranty: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    specifications: {
        type: Object,
        required: true,
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        rating: Number,
        comment: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = models.Product || model<IProduct>('Product', productSchema);

export default Product;