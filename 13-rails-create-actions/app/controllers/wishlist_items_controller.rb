class WishlistItemsController < ApplicationController
  def new
    @items = Item.all
    # should respond to the request with a form to create a wishlist item 
    # should respond with HTML that creates a form 
    # view should have HTML for a form 
  end
  
  def create 
    byebug
  end

  def index
    @wishlistItems = WishlistItem.all
  end
end
