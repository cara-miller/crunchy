class Api::V1::SupplyCategoriesController < ApiController

  def index
    supply_categories = SupplyCategory.all
    render json: supply_categories
  end
end
