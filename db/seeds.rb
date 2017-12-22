# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Supply.destroy_all
Productsupply.destroy_all

purse = Product.create(name: "Small Brown Leather Purse", retail_price: 5500, image: "https://img0.etsystatic.com/153/0/12844026/il_570xN.1160217064_e8j0.jpg" )
harness = Product.create(name: "Black Latex Harness", retail_price: 15000, image: "https://img1.etsystatic.com/131/1/12554957/il_570xN.923283661_jcox.jpg")
wallet = Product.create(
  name: "Purple Tooled Leather Wallet",
  retail_price: 2200,
  image: "https://i.pinimg.com/736x/17/5a/05/175a0544cb0e9092da5a0877def93cb1--handmade-leather-wallet-slim-wallet.jpg",
  )


supply = Supply.create(
  name: "black strap",
  sold_in_quantity: 12,
  unit_of_measurement: "feet",
  cost: 400)

supply2 = Supply.create(
  name: "buckle",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 600)

productsupply1 = Productsupply.create(
  product: harness,
  product_id: harness.id,
  supply: supply,
  supply_id: supply.id,
  quantity: 3,
  cost: 100
)
productsupply1 = Productsupply.create(
  product: harness,
  product_id: harness.id,
  supply: supply2,
  supply_id: supply2.id,
  quantity: 5,
  cost: 150
)
