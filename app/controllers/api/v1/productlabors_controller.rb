class Api::V1::ProductlaborsController < ApiController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    render json: {
      labors: Productlabor.where(user_id: current_user.id),
      current_user: current_user
    }
  end

  def create
    @labor = Productlabor.new(productlabor_params)
    @user = current_user
    @labor.user = @user
    @labor.save
    if @labor.save
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
      :product_id,
      :user_id
    )
  end
end
