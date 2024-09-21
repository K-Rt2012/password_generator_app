class PasswordsController < ApplicationController
  def create
    password = SecureRandom.hex(10) # パスワード生成ロジック
    render json: { password: password }
  end
end
