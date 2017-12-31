class Api::V1::ProductsuppliesController < ApiController

  def index
    render json: Productsupply.all
  end

  def create
    supply = Productsupply.new(productsupply_params)
    if supply.save
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
      :product_id
    )
  end
end
