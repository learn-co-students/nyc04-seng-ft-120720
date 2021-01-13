items = [
    {
        name: "Premium Silicone AirPods Case",
        image: "https://m.media-amazon.com/images/I/31sJOTBrbvL._AC_SY322_.jpg",
        price: 50,
        description: "AT ELAGO ALL CASES ARE DESIGNED JUST FOR YOU with a simple and functional design in mind. These cases support BOTH WIRED AND WIRELESS charging for AirPods 2 & 1. We want to make your life SIMPLE AND HASSLE FREE!"
    },
    {
        name: "The Don't Laugh Challenge",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Ru9HTHH3L._SX331_BO1,204,203,200_.jpg",
        price: 15,
        description: "PARENT ALERT!! THIS CHILDRENS JOKE BOOK WILL MAKE THE CHILD THAT READS IT A MINI-COMEDIAN!!"
    },
    {
        name: "Simple Elephant Undated Planner 2021-2022",
        image: "https://m.media-amazon.com/images/I/41EfUfbwsCL._AC_SY322_.jpg",
        price: 20,
        description: "CARVE A PATH TO SUCCESS: Our Undated 2021-2022 Planner is built to focus on daily, weekly and monthly planning to help organize your mind and goals. Build your most successful and productive year yet for personal goals, work to-dos, school organization, upcoming holiday planning, or simply for your physical & mental health!"
    },
    {
        name: "Redify 2 Pack Adjustable Jump Rope ",
        image: "https://m.media-amazon.com/images/I/41ZkwO4mFpL._AC_SY322_.jpg",
        price: 45,
        description: "Jump rope is a great calorie-burner. Improves your balance and quickness/coordination by making your mind focus on your feet for sustained periods of time, improving the muscle tension of your whole body."
    },
    {
        name: "Mattel Games UNO",
        image: "https://m.media-amazon.com/images/I/51osavbsRWL._AC_SY322_.jpg",
        price: 15,
        description: "​UNO is the classic family card game that's easy to learn and so much fun to play"
    },
    {
        name: "8 Pieces Wind-up Christmas Novelty Jumping Toys",
        image: "https://m.media-amazon.com/images/I/41BTbN0aNOL._AC_SY322_.jpg",
        price: 5,
        description: "8 pieces of wind up toys (2 characters x 4 pcs per character), Santa Claus, Reindeer, Snowman, Penguin"
    },
    {
        name: "Monopoly Deal Card Game",
        image: "https://m.media-amazon.com/images/I/51jO5Wh7iHL._AC_SY322_.jpg",
        price: 10,
        description: "New Monopoly Deal card game that is moving through Family Game Nights everywhere"
    }
]

def seed_items(items_array)
    items_array.each do |item|
        Item.create(item)
    end
end

Item.destroy_all
User.destroy_all
seed_items(items)
User.create(username: "User1", age:18)