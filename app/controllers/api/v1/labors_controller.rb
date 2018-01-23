class Api::V1::LaborsController < ApiController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    render json: {
      labors: Labor.where(user_id: current_user.id),
      current_user: current_user
    }
  end


  def create
    @labor = Labor.new(labor_params)
    @user = current_user
    @labor.user = @user
    @labor.save
    if @labor.save
      render json: { labor: Labor.all }
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
      :cost_per_hour,
      :user_id
    )
  end
end
