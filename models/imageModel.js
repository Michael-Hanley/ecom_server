var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
    id: String,
    order: String,
    created_at: String,
    updated_at: String,
    sku: String,
    title: String,
    slug: String,
    sale_price: String,
    status: {
        value: String,
        data: Object,
    },
    category: {
        value: String,
        data: Object,
    },
    stock_level: String,
    stock_statis: {
        value: String,
        data: Object,
    },
    description: String,
    requires_Shipping: {
        value: String,
        data: Object,
    },
    weight: String,
    height: String,
    width: String,
    depth: String,
    catalog_only: {
        value: String,
        data: Object,
    },
    tax_band: {
        value: String,
        data: Object,  
    },
    collections: String,
    brand: {
        value: String,
        data: Object,
    },
    price: {
        value: String,
        data: Object,
    },
    is_variation: false,
    modifiers: [],
    images:[],
});
var Products = mongoose.model('Products', productSchema);
module.exports = Products;