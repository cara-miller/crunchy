class Api::V1::ProductsController < ApiController

  def index
    products = Product.all
    render json: products
  end

  def show
    render json: Product.find(params[:id])
  end

  # def create
  #   product = Product.new(product_params)
  #   if product.save
  #     render json: product
  #   else
  #     render json: { error: product.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  private
  def product_params
    params.require(:product).permit(
      :name,
      :retail_price,
      :profit_margin,
      :image
    )
  end
end
