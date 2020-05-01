class Api::UsersController < ApplicationController
    def create
        @user = User.create(user_params)
        if @user.save
            sign_in!(@user)
            render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show

    end

    private 

    def user_params
        params.require(:user).permit(:username, :password, :email, :location, 
            :interests, :experience) 
    end
end
