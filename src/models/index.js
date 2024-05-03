const User = require("./User")
const Category = require("./Category")
const Product = require("./Product")

// realacion entre Product->categoryId

Product.belongsTo(Category)
Category.hasMany(Product)