class Api::V1::SuppliesController < ApiController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  def index
    render json: {
      supplies: Supply.where(user_id: current_user.id),
      current_user: current_user
    }
  end

  def show
      render json: {
        supply: Supply.find(params[:id]),
        current_user: current_user
      }
  end

  def create
    @supply = Supply.new(supply_params)
    @user = current_user
    @supply.user = @user
    @supply.save
    if @supply.save
      render json: Supply.all
    else
      render json:
      { error: supply.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private
  def supply_params
    params.require(:supply).permit(
      :name,
      :sold_in_quantity,
      :unit_of_measurement,
      :cost,
      :product_id,
      :user_id
    )
  end
end
