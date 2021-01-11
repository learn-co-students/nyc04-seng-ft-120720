class Item < ApplicationRecord
    has_many :wishlist_items
    has_many :users, through: :wishlist_items
end
