require "test_helper"

class WishlistItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get wishlist_items_new_url
    assert_response :success
  end

  test "should get index" do
    get wishlist_items_index_url
    assert_response :success
  end
end
