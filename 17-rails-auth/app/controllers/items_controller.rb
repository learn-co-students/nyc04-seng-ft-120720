class ItemsController < ApplicationController

  before_action :set_item, only: [:show, :edit, :update, :destroy, :increase]

  def index
    @items = Item.all 
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
  end

  def edit
  end

  def update
    @item.update(item_params)
    redirect_to item_path(@item)
  end

  def destroy
    @item.destroy
    redirect_to items_path
  end

  def increase
    number_to_become = @item.price + params[:increase_by_this_num].to_i
    @item.update(price: number_to_become)
    redirect_to item_path(@item)
  end


  private

  def item_params
    params.require(:item).permit(:name, :description, :price, :image)
  end

  def set_item
    @item = Item.find(params[:id])
  end


end

