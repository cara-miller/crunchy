# if statement will need to be added to def create to ensure sfs is associated with the correct labor_id
class Api::V1::LaborsController < ApiController
  before_action :authenticate_user!
  def index
    render json: Labor.all
  end


  def create
    labor = Labor.new(labor_params)
    if labor.save
      render json: Labor.all
    else
      render json:
      { error: labor.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private
  def labor_params
    params.require(:labor).permit(
      :description,
      :cost_per_hour
    )
  end
end
