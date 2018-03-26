Rails.application.routes.draw do
  # get 'home/index'
  root :to => 'home#index'
  get 'users/index'
  get 'users/show'
  # get '/list', to: 'lists#index'
  get '/rsvp', to: 'home#rsvp'
  get '/brides-squad', to: 'home#brides_squad'
  get '/grooms-squad', to: 'home#grooms_squad'
  get '/venue/church', to: 'home#venue_church'
  get '/venue/reception', to: 'home#venue_reception'
  get '/photos', to: 'home#photos'
  get '/registry', to: 'home#registry'
  get '/the-games', to: 'home#the_games'
  get '/contact-us', to: 'home#contact_us'

  # get 'lotto_land_template', to: 'lotto_land#lotto_land_template'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
