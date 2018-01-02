class Api::V1::ProductsController < ApiController
  # before_action :authenticate_user!

  def index
    render json: Product.all
  end

  def show
    @product = Product.find(params[:id])
    render json: {
    product: @product,
    supplies: @product.supplies,
    productSupplies: @product.productsupplies,
    labors: @product.labors,
    productLabors: @product.productlabors
    }
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: { error: product.errors.full_messages }, status: :unprocessable_entity
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
