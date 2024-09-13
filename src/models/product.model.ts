import { model, models, Schema } from 'mongoose';

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
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
    }
});

const Product = models.Product || model('Product', productSchema);

export default Product;