class Api::V1::ProductsController < ApiController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    products = Product.where(user: current_user)
    render json: {
      products: products,
      current_user: current_user
    }
  end

  def show
    @product = Product.find(params[:id])
    if product.user_id == current_user.id
      render json: {
      product: @product,
      supplies: @product.supplies,
      productSupplies: @product.productsupplies,
      labors: @product.labors,
      productLabors: @product.productlabors
      }
    else render json:
      { error: 'Plant does not exist' },
        status: 404
    end
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: Product.where(user:current_user)
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
      :image,
      :user_id
    )
  end
end
