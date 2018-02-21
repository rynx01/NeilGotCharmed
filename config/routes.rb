Rails.application.routes.draw do
  # get 'home/index'
  root :to => 'home#index'
  get 'users/index'
  get 'users/show'
  get 'lists/index', to: 'lists#index'
  # get 'lotto_land_template', to: 'lotto_land#lotto_land_template'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
