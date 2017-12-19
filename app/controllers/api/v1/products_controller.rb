class Api::V1::ProductsController < ApiController

  def index
    products = Product.all
    render json: products
  end

  def show
    render json: Product.find(params[:id])
  end

  def create
    venue = Product.new(product_params)
    if venue.save
      render json: venue
    else
      render json: { error: venue.errors.full_messages }, status: :unprocessable_entity
    end
  end

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
