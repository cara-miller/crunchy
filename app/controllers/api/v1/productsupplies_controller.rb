class Api::V1::ProductsuppliesController < ApiController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  def index
    render json: {
      supplies: Productsupply.where(user_id: current_user.id),
      current_user: current_user
    }
  end

  def create
    @supply = Productsupply.new(productsupply_params)
    @user = current_user
    @supply.user = @user
    @supply.save
    if @supply.save
      render json: Productsupply.all
    else
      render json:
      { error: supply.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  def destroy
  @productsupply = Productsupply.find(params[:id])
  @productsupply.delete
end

  private
  def productsupply_params
    params.require(:productsupply).permit(
      :quantity,
      :supply_id,
      :product_id,
      :user_id
    )
  end
end
