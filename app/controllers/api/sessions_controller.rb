class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            sign_in!(@user)
            render JSON: '/api/users/show'
        else 
            render JSON: ['Invalid Username or Password'], status: 422
        end
    end

    def show
    end

    def destroy
        @user = current_user
        if @user 
            sign_out
            render JSON: {}
        else 
            render JSON: ["Nobody signed in"], status: 404
        end
    end
end
