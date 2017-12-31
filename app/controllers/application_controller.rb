class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  def index; end

  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys:
      [
        :first_name,
        :last_name,
        :username,
      ])
  end
end
