class ItemsController < ApplicationController

  before_action :set_item, only: [:show, :edit, :update, :destroy, :increase]

  def index
    @items = Item.all 
    # this method should respond with a view that shows a list of items
    # render :'items/index'
  end

  def new 
    @item = Item.new
  end

  def create 
    new_item = Item.create(item_params)
    if new_item.valid?
      redirect_to item_path(new_item)
    else
      flash[:messages] = new_item.errors.full_messages
      redirect_to new_item_path
    end
  end

  def show 
    # params hold data coming from the route and request
    # in this case our route is send additional data in the form of an :id dynamic argument
    # it takes the dynamic argument and makes it a key => id: 
    # it reads the route at the :id place to see what the user typed in =>  the item's id that they clicked on
    # params => it's an object created by rails 
    # created to hold data coming from our requests 
    # yesterday's data was the "id" from the route 

    # {id: }
  end

  def edit
  end

  def update
    @item.update(item_params)
    redirect_to item_path(@item)
    # redirect_to "/items/#{@item.id}"
  end

  def destroy
    @item.destroy
    redirect_to items_path
  end

  def increase
    number_to_become = @item.price + params[:increase_by_this_num].to_i
    @item.update(price: number_to_become)
    # if @item.valid?
    # else
    # end

    # if @item.update()
    # end
  
    redirect_to item_path(@item)
  end


  private

  def item_params
    # params.require(:MODEL).permit(:ATTRIBUTE1, :ATTRIBUTE2)
    params.require(:item).permit(:name, :description, :price, :image)
  end

  def set_item
    # INSTANCE VARIABLES SET IN A BEFORE_ACTION CARRY THROUGH
    @item = Item.find(params[:id])
  end


end


#Strategy
# 1. Item.all => array of items
# where? => controller 
# 2. iterate through that array 
# 3. Print the name and image of each item in the view

# 1. find_by/find