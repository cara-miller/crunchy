class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    # binding.pry
    users = User.all
    # render json: { users: users, current_user: current_user }
  end

  def destroy
    user = User.find(params[:id])
    user.destroy

    render json: user
  end
end
