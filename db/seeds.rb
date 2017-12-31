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
Labor.destroy_all
Productlabor.destroy_all
User.destroy_all

kylee = User.create(first_name: "kylee", last_name: "a", username: "kjoya", email: "kjoya@gmail.com", password: "secrectPassword", encrypted_password: "secretPassword" )

purse = Product.create(user: kylee, user_id: kylee.id, name: "Small Brown Leather Purse", retail_price: 5500, image: "https://img0.etsystatic.com/153/0/12844026/il_570xN.1160217064_e8j0.jpg" )
harness = Product.create(user: kylee, user_id: kylee.id, name: "Black Latex Harness", retail_price: 15000, image: "https://img1.etsystatic.com/131/1/12554957/il_570xN.923283661_jcox.jpg")
wallet = Product.create(
  user: kylee,
  user_id: kylee.id,
  name: "Purple Tooled Leather Wallet",
  retail_price: 2200,
  image: "https://i.pinimg.com/736x/17/5a/05/175a0544cb0e9092da5a0877def93cb1--handmade-leather-wallet-slim-wallet.jpg",
  )

brownleather = Supply.create(
  user: kylee,
  user_id: kylee.id,
  name: "Brown Faux Leather",
  sold_in_quantity: 2,
  unit_of_measurement: "yards",
  cost: 3000)

purpleleather = Supply.create(
  user: kylee,
  user_id: kylee.id,
  name: "Purple Alligator Skin Pleather",
  sold_in_quantity: 2,
  unit_of_measurement: "yards",
  cost: 2199)

strap = Supply.create(
  user: kylee,
  user_id: kylee.id,
  name: "Thin Black Leather Straps",
  sold_in_quantity: 12,
  unit_of_measurement: "feet",
  cost: 4000)

buckle = Supply.create(
  user: kylee,
  user_id: kylee.id,
  name: "buckle",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 600)

harnessstrap = Productsupply.create(
  user: kylee,
  user_id: kylee.id,
  product: harness,
  product_id: harness.id,
  supply: strap,
  supply_id: strap.id,
  quantity: 4)

harnessbuckle = Productsupply.create(
  user: kylee,
  user_id: kylee.id,
  product: harness,
  product_id: harness.id,
  supply: buckle,
  supply_id: buckle.id,
  quantity: 5)

ps1 = Productsupply.create(
  user: kylee,
  user_id: kylee.id,
  product: purse,
  product_id: purse.id,
  supply: strap,
  supply_id: strap.id,
  quantity: 1)

ps2 = Productsupply.create(
  user: kylee,
  user_id: kylee.id,
  product: wallet,
  product_id: wallet.id,
  supply: purpleleather,
  supply_id: purpleleather.id,
  quantity: 1)

attachingbuckles = Labor.create(
  user: kylee,
  user_id: kylee.id,
  description: "attaching buckles",
  cost_per_hour: 1200)

l1 = Labor.create(
  user: kylee,
  user_id: kylee.id,
  description: "Leatherwork",
  cost_per_hour: 1200)

l2 = Labor.create(
  user: kylee,
  user_id: kylee.id,
  description: "Packaging Products for Shipping",
  cost_per_hour: 1000
)

l3 = Labor.create(
  user: kylee,
  user_id: kylee.id,
  description: "Adding Studs",
  cost_per_hour: 1200
)

l4 = Labor.create(
  user: kylee,
  user_id: kylee.id,
  description: "Tagging and Bagging",
  cost_per_hour: 1100
)

pl1 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: harness,
  product_id: harness.id,
  labor:l2,
  labor_id: l2.id,
  time_per_job: 10
)

pl2 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: purse,
  product_id: purse.id,
  labor:l2,
  labor_id: l2.id,
  time_per_job: 10
)

pl3 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: purse,
  product_id: purse.id,
  labor:l4,
  labor_id: l4.id,
  time_per_job: 10
)

pl3 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: purse,
  product_id: purse.id,
  labor:l2,
  labor_id: l2.id,
  time_per_job: 10
)

pl4 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: wallet,
  product_id: wallet.id,
  labor:l4,
  labor_id: l4.id,
  time_per_job: 10
)

pl5 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: wallet,
  product_id: wallet.id,
  labor:l3,
  labor_id: l3.id,
  time_per_job: 20
)

pl6 = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: wallet,
  product_id: wallet.id,
  labor:l1,
  labor_id: l1.id,
  time_per_job: 10
)

attachingharnessbuckles = Productlabor.create(
  user: kylee,
  user_id: kylee.id,
  product: harness,
  product_id: harness.id,
  labor:attachingbuckles,
  labor_id: attachingbuckles.id,
  time_per_job: 10
)
