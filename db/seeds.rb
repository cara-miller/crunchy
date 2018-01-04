Product.destroy_all
Supply.destroy_all
Productsupply.destroy_all
Labor.destroy_all
Productlabor.destroy_all
User.destroy_all

user1 = User.create(
  first_name: "seededuser",
  last_name: "seededuser",
  username: "seededuser",
  email: "seededuser@gmail.com",
  password: "secrectPassword",
  encrypted_password: "secretPassword"
)


brownpurse = Product.create(
   name: "Small Brown Beaded Leather Purse",
   retail_price: 120,
   user: user1,
   user_id: user1.id
 )

pinkpurse = Product.create(
  name: "Large Pink Tasseled Duffel Bag",
  retail_price: 100,
  user: user1,
  user_id: user1.id
)

wallet = Product.create(
  name: "Purple Tooled Leather Wallet",
  retail_price: 45,
  user: user1,
  user_id: user1.id)

blackbag = Product.create(
  name: "Black Velvet Bag with Embroidered Details",
  retail_price: 300,
  user: user1,
  user_id: user1.id
)

bbag = Product.create(
  name: "Big Brown Over-the-shoulder Purse",
  retail_price: 175,
  user: user1,
  user_id: user1.id
)

gbag = Product.create(
  name: "Green Leather Bag",
  retail_price: 225,
  user: user1,
  user_id: user1.id
)

graywallet = Product.create(
  name: "Gray Velvet Wallet",
  retail_price: 65,
  user: user1,
  user_id: user1.id
)

strap = Supply.create(
  name: "Brown Leather Straps",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 12.50,
  user: user1,
  user_id: user1.id)

velvet = Supply.create(
  name: "Gray Velvet",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 5.99,
  user: user1,
  user_id: user1.id)

pvelvet = Supply.create(
  name: "Pink Velvet",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 7.99,
  user: user1,
  user_id: user1.id)

bvelvet = Supply.create(
  name: "Black Velvet",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 9.99,
  user: user1,
  user_id: user1.id)

ptassles = Supply.create(
  name: "Pink Tassels",
  sold_in_quantity: 100,
  unit_of_measurement: "pieces",
  cost: 9.99,
  user: user1,
  user_id: user1.id)

ptassles = Supply.create(
  name: "Gold Tassels",
  sold_in_quantity: 100,
  unit_of_measurement: "pieces",
  cost: 12.99,
  user: user1,
  user_id: user1.id)

buckle = Supply.create(
  name: "Buckles",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 35,
  user: user1,
  user_id: user1.id)

s1 = Supply.create(
  name: "Red Felt",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 14,
  user: user1,
  user_id: user1.id)

ps1 = Productsupply.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  supply: strap,
  supply_id: strap.id,
  quantity: 30,
  productsupplycost: 100,
  user: user1,
  user_id: user1.id)

ps2 = Productsupply.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  supply: buckle,
  supply_id: buckle.id,
  quantity: 5,
  productsupplycost: 150,
  user: user1,
  user_id: user1.id)

attachingbuckles = Labor.create(
  description: "Attaching Buckles",
  cost_per_hour: 15,
  user: user1,
  user_id: user1.id)

assistantsewing = Labor.create(
  description: "Sewn by Assistant",
  cost_per_hour: 15,
  user: user1,
  user_id: user1.id
)

knitting = Labor.create(
  description: "Knitting",
  cost_per_hour: 15,
  user: user1,
  user_id: user1.id
)

packaging = Labor.create(
  description: "Packing and Shipping",
  cost_per_hour: 15,
  user: user1,
  user_id: user1.id
)


pl1 = Productlabor.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  labor:attachingbuckles,
  labor_id: attachingbuckles.id,
  time_per_job: 10,
  user: user1,
  user_id: user1.id
)

pl2 = Productlabor.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  labor:assistantsewing,
  labor_id: assistantsewing.id,
  time_per_job: 10,
  user: user1,
  user_id: user1.id
)
