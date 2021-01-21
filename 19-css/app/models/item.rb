class Item < ApplicationRecord
    has_many :wishlist_items
    has_many :users, through: :wishlist_items

    validates :name, presence: {message: "must be there please otherwise I don't know who you are"}
    validates :name, uniqueness: true
    validates :price, numericality: {greater_than: 0, less_than_or_equal_to: 100}

    validate :cannot_contain_chicken

    private

    def cannot_contain_chicken   
        if self.name && self.name.include?("chicken")
            self.errors.add(:name, "cannot include chicken")
        end
    end



end
