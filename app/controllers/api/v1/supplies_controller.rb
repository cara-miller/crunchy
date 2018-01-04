class Api::V1::SuppliesController < ApiController
  before_action :authenticate_user!
  def index
    render json: Supply.all
  end

  def show
    @supply = Supply.find(params[:id])
      render json: {
        supply: @supply
      }
  end

  def create
    supply = Supply.new(supply_params)
    if supply.save
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
      :product_id
    )
  end
end
