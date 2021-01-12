class WishlistItemsController < ApplicationController
  def new
    @items = Item.all
    @wishlistItem = WishlistItem.new
    # should respond to the request with a form to create a wishlist item 
    # should respond with HTML that creates a form 
    # view should have HTML for a form 
  end
  
  def create 
    # Class.new => creates the instance but doesn't save to db
    # Class.create => creates the instance and saves to the db
    # mass assignment in rails is bad 
   wishlistItem = WishlistItem.create(wishlistItem_params)
   redirect_to "/wishlistItems/#{wishlistItem.id}"
  end

  def index
    @wishlistItems = WishlistItem.all
  end


  private 

  def wishlistItem_params
    params.require(:wishlist_item).permit(:user_id, :item_id)
  end

end
