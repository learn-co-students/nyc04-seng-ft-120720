class WishlistItemsController < ApplicationController
  def new
    @items = Item.all
    @wishlistItem = WishlistItem.new
  end
  
  def create 
   wishlistItem = WishlistItem.create(wishlistItem_params)
   redirect_to "/users/#{wishlistItem.user_id}"
  end

  def index
    @wishlistItems = WishlistItem.all
  end


  private 

  def wishlistItem_params
    params.require(:wishlist_item).permit(:user_id, :item_id)
  end

end
