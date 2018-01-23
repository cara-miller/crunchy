class Api::V1::ProductsController < ApiController
  :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    # binding.pry
    render json: {
      products: Product.where(user_id: current_user.id),
      current_user: current_user
    }

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
    @product = Product.new(product_params)
    @user = current_user
    @product.user = @user
    @product.save
    if @product.save
      return render json: { product: Product.find(@product.id) }
    else
      render json: { error: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if Product.update(params[:id], product_params)
      @product = Product.find(params[:id])
      render json: {
        product: @product,
        supplies: @product.supplies,
        productSupplies: @product.productsupplies,
        labors: @product.labors,
        productLabors: @product.productlabors
       }
    else
      render json: { error: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
  @product = Product.find(params[:id])
  @product.delete
end


  private
  def product_params
    params.require(:product).permit(
      :name,
      :retail_price,
      :user_id
    )
  end
end
