Rails.application.routes.draw do
  post 'generate_password', to: 'passwords#create'
end