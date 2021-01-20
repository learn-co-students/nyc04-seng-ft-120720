class WishlistItemsController < ApplicationController
  def new
    @items = Item.all - current_user.items
    @wishlistItem = WishlistItem.new
  end
  
  def create 
   wishlistItem = current_user.wishlist_items.create(wishlistItem_params)
   redirect_to "/users/#{wishlistItem.user_id}"
  end

  def index
    @wishlistItems = current_user.wishlist_items
  end


  def destroy
    @wishlist_item = current_user.wishlist_items.find(params[:id])
    @wishlist_item.destroy
    redirect_to "/wishlistItems"
  end

  def add_item
    current_user.wishlist_items.create(item_id: params[:item_id])
    # redirect_back(fallback_location: items_path)
    redirect_to "/wishlistItems"
  end

  private 

  def wishlistItem_params
    params.require(:wishlist_item).permit(:user_id, :item_id)
  end

end
