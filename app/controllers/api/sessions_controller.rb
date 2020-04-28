class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            sign_in!(@user)
            render '/api/users/show'
        else 
            render json: ['Invalid Username or Password']
        end

    end

    def show
    end

    def destroy
        @user = current_user
        if @user 
            sign_out
            render {}
        else 
            render json: ["Nobody signed in"], status: 404
        end
    end
end
