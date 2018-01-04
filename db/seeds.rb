Product.destroy_all
Supply.destroy_all
Productsupply.destroy_all
Labor.destroy_all
Productlabor.destroy_all


brownpurse = Product.create(
   name: "Small Brown Beaded Leather Purse",
   retail_price: 120)

pinkpurse = Product.create(
  name: "Large Pink Tasseled Duffel Bag",
  retail_price: 100)

wallet = Product.create(
  name: "Purple Tooled Leather Wallet",
  retail_price: 45)

blackbag = Product.create(
  name: "Black Velvet Bag with Embroidered Details",
  retail_price: 300
)

bbag = Product.create(
  name: "Big Brown Over-the-shoulder Purse",
  retail_price: 175
)

gbag = Product.create(
  name: "Green Leather Bag",
  retail_price: 225
)

graywallet = Product.create(
  name: "Gray Velvet Wallet",
  retail_price: 65
)

strap = Supply.create(
  name: "Brown Leather Straps",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 12.50)

velvet = Supply.create(
  name: "Gray Velvet",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 5.99)

pvelvet = Supply.create(
  name: "Pink Velvet",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 7.99)

bvelvet = Supply.create(
  name: "Black Velvet",
  sold_in_quantity: 36,
  unit_of_measurement: "inches",
  cost: 9.99)

ptassles = Supply.create(
  name: "Pink Tassels",
  sold_in_quantity: 100,
  unit_of_measurement: "pieces",
  cost: 9.99)

ptassles = Supply.create(
  name: "Gold Tassels",
  sold_in_quantity: 100,
  unit_of_measurement: "pieces",
  cost: 12.99)

buckle = Supply.create(
  name: "Buckles",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 35)

s1 = Supply.create(
  name: "Red Felt",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 14)

ps1 = Productsupply.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  supply: strap,
  supply_id: strap.id,
  quantity: 30,
  productsupplycost: 100)

ps2 = Productsupply.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  supply: buckle,
  supply_id: buckle.id,
  quantity: 5,
  productsupplycost: 150)

attachingbuckles = Labor.create(
  description: "Attaching Buckles",
  cost_per_hour: 15)

assistantsewing = Labor.create(
  description: "Sewn by Assistant",
  cost_per_hour: 15
)

knitting = Labor.create(
  description: "Knitting",
  cost_per_hour: 15
)

packaging = Labor.create(
  description: "Packing and Shipping",
  cost_per_hour: 15
)


pl1 = Productlabor.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  labor:attachingbuckles,
  labor_id: attachingbuckles.id,
  time_per_job: 10
)

pl2 = Productlabor.create(
  product: pinkpurse,
  product_id: pinkpurse.id,
  labor:assistantsewing,
  labor_id: assistantsewing.id,
  time_per_job: 10
)
