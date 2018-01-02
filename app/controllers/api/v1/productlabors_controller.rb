class Api::V1::ProductlaborsController < ApiController
  # before_action :authenticate_user!

  def index
    render json: Productlabor.all
  end

  def create
    labor = Productlabor.new(productlabor_params)
    if labor.save
      render json: Productlabor.all
    else
      render json:
      { error: labor.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  def destroy
  @productlabor = Productlabor.find(params[:id])
  @productlabor.delete
end

  private
  def productlabor_params
    params.require(:productlabor).permit(
      :cost_for_this_job,
      :time_per_job,
      :labor_id,
      :product_id
    )
  end
end
