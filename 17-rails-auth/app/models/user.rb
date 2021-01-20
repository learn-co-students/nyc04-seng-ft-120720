class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}, presence: true

    has_many :wishlist_items
    has_many :items, through: :wishlist_items

    def job
        "Doctor"
    end

    def last_logged_in
        self.updated_at.strftime("%H:%M")
    end

    def professor_name
        "Dr. #{self.username}"
    end

end
