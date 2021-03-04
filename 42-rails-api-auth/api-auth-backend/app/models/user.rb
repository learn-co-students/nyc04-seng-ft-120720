class User < ApplicationRecord
  # bcrypt
  has_secure_password
  # .authenticate("123")
  # plaintext_password == hashed password (password_digest)

  # .password=
  # .password = "123" => password_digest "123$123klkshdfuy87234i.asdasd"

  validates :username, uniqueness: { case_sensitive: false }
end
