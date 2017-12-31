class UsersController < ApplicationController

  def index
    @users = User.all
    render json: { users: users, current_user: current_user }
  end
end
