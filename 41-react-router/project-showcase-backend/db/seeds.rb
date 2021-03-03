User.destroy_all
Project.destroy_all

ian = User.create!(
  username: "ian",
  password: "123",
  name: "Ian",
  bio: "Here's my bio",
  cohort: "102620",
  linkedin: "https://www.linkedin.com/in/ian-hollander",
  github: "https://github.com/ihollander"
)

matt = User.create!(
  username: "matthewogtong",
  password: "123",
  name: "Matthew Ogtong",
  bio: "Here's my bio",
  cohort: "102620",
  github: "https://github.com/matthewogtong"
)

melissa = User.create!(
  username: "thecodeplanner",
  password: "123",
  name: "Melissa Mach",
  bio: "Here's my bio",
  cohort: "102620",
  github: "https://github.com/thecodeplanner"
)

ian.projects.create!([
  {
    name: "Kibbles N Bitz",
    about: "Tinder for dogs",
    phase: 4,
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Alienwares",
    about: "Etsy for aliens",
    phase: 4,
    link: "https://www.etsy.com/",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Zookeepr",
    about: "Donate to endangered animals",
    phase: 3,
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Reciplease",
    about: "A recipe tracking app",
    phase: 2,
    link: "https://www.epicurious.com/",
    image: "https://via.placeholder.com/300"
  }
])

matt.projects.create!({
  name: "HomeStory",
  about: "A web app for storing info about furniture items you plan on purchasing in the future or simply just want to keep tabs of.",
  phase: 3,
  link: "https://homestory.netlify.app",
  image: "./images/homestory.png"
})
melissa.projects << Project.find_by(name: "HomeStory")

