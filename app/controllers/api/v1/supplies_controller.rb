# if statement will need to be added to def create to ensure sfs is associated with the correct supply_id
class Api::V1::SuppliesController < ApiController
  def index
    render json: Supply.all
  end

  def show
    @supply = Supply.find(params[:id])
      render json: {
        supply: @supply
      }
  end

  # def create
  #   product = Product.new(product_params)
  #   if product.save
  #     render json: product
  #   else
  #     render json: { error: product.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end
end
