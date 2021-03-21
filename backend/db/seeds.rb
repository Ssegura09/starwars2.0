# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.destroy_all

c1 = Character.create(name: "Anakin Skywalker")
c2 = Character.create(name: "Luke Skywalker")
c3 = Character.create(name: "Leia Skywalker")

puts "we donebe seeded"
