class HomeController < ApplicationController
  
  def index
  end

  def rsvp
    respond_to do |format|
      format.html do
        render template: 'home/rsvp'
      end
    end
  end

  def aboutus
  end

  def facebook
  end

end
