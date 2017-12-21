class Api::V1::SupplyCategoriesController < ApiController
  def index
    render json: SupplyCategory.all
  end
end
