Product.destroy_all
Supply.destroy_all
Productsupply.destroy_all
Labor.destroy_all
Productlabor.destroy_all


purse = Product.create( name: "Small Brown Leather Purse", retail_price: 5500, image: "https://img0.etsystatic.com/153/0/12844026/il_570xN.1160217064_e8j0.jpg" )
hat = Product.create(name: "Green Hat", retail_price: 15000, image: "https://img1.etsystatic.com/131/1/12554957/il_570xN.923283661_jcox.jpg")
wallet = Product.create(
  name: "Purple Tooled Leather Wallet",
  retail_price: 2200,
  image: "https://i.pinimg.com/736x/17/5a/05/175a0544cb0e9092da5a0877def93cb1--handmade-leather-wallet-slim-wallet.jpg",
  )


strap = Supply.create(

  name: "Brown Straps",
  sold_in_quantity: 12,
  unit_of_measurement: "feet",
  cost: 400)

buckle = Supply.create(

  name: "Buckles",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 600)

s1 = Supply.create(

  name: "Red Felt",
  sold_in_quantity: 20,
  unit_of_measurement: "units",
  cost: 600)

ps1 = Productsupply.create(

  product: purse,
  product_id: purse.id,
  supply: strap,
  supply_id: strap.id,
  quantity: 3,
  productsupplycost: 100)

ps2 = Productsupply.create(

  product: purse,
  product_id: purse.id,
  supply: buckle,
  supply_id: buckle.id,
  quantity: 5,
  productsupplycost: 150)

attachingbuckles = Labor.create(

  description: "attaching buckles",
  cost_per_hour: 1200)

attachingharnessbuckles = Productlabor.create(

  product: purse,
  product_id: purse.id,
  labor:attachingbuckles,
  labor_id: attachingbuckles.id,
  time_per_job: 10,
  cost_for_this_job: (((1200 * 10)/100)/60)
)
