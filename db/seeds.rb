# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all

Product.create(name: "Small Brown Leather Purse", retail_price: 55, image: "https://img0.etsystatic.com/153/0/12844026/il_570xN.1160217064_e8j0.jpg" )
Product.create(name: "Black Latex Harness", retail_price: 150, image: "https://img1.etsystatic.com/131/1/12554957/il_570xN.923283661_jcox.jpg")
Product.create(name: "Purple Tooled Leather Wallet", retail_price: 22, image: "https://i.pinimg.com/736x/17/5a/05/175a0544cb0e9092da5a0877def93cb1--handmade-leather-wallet-slim-wallet.jpg")

SupplyCategory.create(name: 'Green Yarn')
SupplyCategory.create(name: 'Red Yarn')

Supplier.create(name: "Ribbon Store", notes: "Slow turn around time")

Supplier.create(name: "Utrecht", notes: "Cheaper in bulk")

Supply.create(supply_category_id: 1, supplier_id: 1, sold_in_quantity: 12, unit_of_measurement: "feet", cost: 4)

Supply.create(supply_category_id: 2, supplier_id: 2, sold_in_quantity: 5, unit_of_measurement: "feet", cost: 6)

Supply.create(supply_category_id: 1, supplier_id: 2, sold_in_quantity: 5, unit_of_measurement: "feet", cost: 5)
