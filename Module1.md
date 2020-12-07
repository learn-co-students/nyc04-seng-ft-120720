# Mod 1 Instruction and Schedule for 071220: The Code Benders

## Table of contents
- [Mod1 Expectations](#mod1-expectations)
- [Week 1](#week-1)
    - [W1 Monday](#w1-monday)
    - [W1 Tuesday](#w1-tuesday)
    - [W1 Wednesday](#w1-wednesday)
    - [W1 Thursday](#w1-thursday)
    - [W1 Friday](#w1-friday)
    - [W1 Weekend](#w1-weekend)
- [Code Challenge Rubric](#code-challenge-rubric)
- [Terminology](#terminology)

---

## Mod1 Expectations
Welcome to Module 1, where we will expand and deepen your understanding of Ruby. In the next three weeks, you should become more comfortable with writing Ruby in Object Oriented paradigm, combine it with a database and finally, create your own CLI. Please don't panic -- we will guide you through this process. 

In order to take most of this mod, please take these pieces of advice to heart:
- do your labs and make sure to at least skim the priority ones before the lecture;
- if anything is unclear, recognize it early and act on it: verbalize a question, google it, ask a peer or on the slack channel;
- check yourself for understanding -- you will find tasks/questions in the schedule section that help you self-check.

One thing to remember is that **Ruby was designed to make your life easier**. Now, because you don't have much experience with other programming languages, it may be difficult at times to trust that this is the best it gets but please take the best practices I share in the lecture to heart. It will all make sense. 

Lastly, a point that often frustrates students is that we first learn how something works under the hood (or, do it the long way), then learn that Ruby has a handy-dandy tool/abstracted method to do it all in just one line, and only then we learn that there's even more ✨ magic ✨ to use. "Why couldn't we just learn the magic?", we often hear. Well, think about it this way: 
- 🎂 you may just go to the bakery and buy **a ready-made Red Velvet cake**. Sure, everyone will be happy. However, does this make you a good pastry chef? No. 
- 🥣 Okay, so you can go to a store and buy **a cake mix** and you bake it at home. You can customize it a bit and while that doesn't make you a chef, you certainly know at least how the oven works. 
- 🥚 However, the true chef would **make a Red Velvet cake from scratch**: using eggs, flour (gluten-free or wholewheat) and other ingredients, control sugar measurements and the ultimate shape and height of the cake.

Same with Ruby and software development: you could just skip a few steps and get right to the magic but if you ever wanted to customize the magic, you need to know how it's working. 

In order to not leave you feeling tricked, I will gradually fill out this table marking how topics relate to each other so you see how what you learn actually has a purpose:

<table>
<tr>
    <td style="text-align:center" width="150px"> 🥚 </td>
    <td style="text-align:center" width="150px"> 🥣 </td>
    <td style="text-align:center" width="150px"> 🎂 </td>
</tr>
<tr>
    <td style="text-align:center" width="150px"> <code>def name=(name)</code> </td>
    <td style="text-align:center" width="150px"> ? </td>
    <td style="text-align:center" width="150px"> ? </td>
</tr>
<tr>
    <td style="text-align:center" width="150px"> <code>def name</code> </td>
    <td style="text-align:center" width="150px"> ? </td>
    <td style="text-align:center" width="150px"> ? </td>
</tr>
</table>

Have a question? [Ask us!](https://flatiron-school.slack.com/archives/C018TV7P7UG)

---

## Week 1

Week one of every module is designated for you to get exposure to different topics that you will consolidate over the following weekend and the days before the code challenge and then practice further in the project week. Usually, you will get **A LOT** of labs in the first days -- please know you will have time to finish them by the end of the week and focus initially on the priority ones. In Mod1 Week1 you should:
- become comfortable with using `binding.pry`,
- write your own classes,
- use getter and setter methods for attributes,
- add instance and class methods,
- be able to check what `self` denotes,
- connect two (or more!) classes together,
- draw domain models,
- use `map`, `find`, `select` and `each` on instances of classes,
- become aware of how stress manifests for you in this program setting and find ways to deal with it (or reach out to your instructors for help),
- be proficiently using Slack channels, DMs, emoji responses and threads to seek help, offer support and build commmunity.

These are the skills you need to prioritize when studying this week. Please take every opportunity to write code. If you're lacking prompts from labs, just look around yourself and write a code description of your room (your room being one class, with other classes being furniture, people, plants, etc. -- add aspecific behaviors and interdependencies, etc.).

---

### W1 Monday

#### Self-check questions
- Morning lecture: 
    - What are objects in Ruby? What is "behavior" and "data"?
    - How do I write a class in Ruby?
    - What is a class and instance? 
    - How do I create a new instance of the class?
    - How can I hack Ruby classes (e.g. String)? Why would I? 

#### Labs
Start here:

- **Welcome to Phase 1** ⭐️
- **What Makes an effective programmer?** ⭐️
- **Blogging** ⭐️
- **Module Assessments** ⭐️
- **Common Terminal Issues** ⭐️

Introduction To Object-Orientation In Ruby:
- **Intro To Classes And Instances** ⭐️
- **Classes And Instances Lab** ⭐️
- **Instance Methods** ⭐️
- **Instance Methods Lab** ⭐️
- **Instance Variables** ⭐️
- **Object Initialization** ⭐️
- **Object Initialization Lab** ⭐️
- Variables And Scope Quiz
- **Object Attributes** ⭐️
- **Object Attributes Lab** ⭐️
- Object Accessors
- **Meowing Cat** ⭐️
- OO Email Parser
- **Ruby Object Orientation Fundamentals Quiz** ⭐️
- **Object-Orientation In Ruby Bookend** ⭐️

---

### W1 Tuesday

#### Self-check questions
- What are "getter/reader" and "setter/writer" methods? How are they different? Why do we need them? What is the danger of mistaking them?
- What is the difference between `attr_reader`, `attr_writer` and `attr_accessor`?
- If I create two instances of a Dog class with exactly same attributes, will they be the same attribute?

#### Labs
Topics In OO - Building Complex Class Objects In Ruby
- Introduction To Building Complex Class Objects In Ruby
- OO Basics
- OO School Domain
- OO Design
- Building Complex Class Objects In Ruby Quiz
- Building Complex Class Objects In Ruby Bookend

Topics In OO - Self In Ruby
- **Introduction To Self In Ruby** ⭐️
- The Fundamentals Of Self
- **OO Cash Register** ⭐️
- OO Counting Sentences
- **Self Quiz** ⭐️
- **Self Bookend** ⭐️

Topics In OO - Class Variables And Methods In Ruby
- Introduction To Class Variables And Methods In Ruby
- **Class Variables And Methods** ⭐️
- **Remembering Objects** ⭐️
- **Class Variables And Methods Lab** ⭐️
- OO Basics With Class Constants
- Private Methods
- **Class Variables And Methods Quiz** ⭐️
- **Class Variables And Methods Bookend** ⭐️

---

### W1 Wednesday

#### Self-check questions
- How do I recognize a class variable? How do I recognize an instance variable?
- How is instance variable (`@name`) different from just regular variable (`name`)?
- How do I write a class method? And instance method?
- What is `self`? How do I know if the `self` will denote a class or an instance?
- How can I check what `self` denotes?
- How can I store all instances of the same class? 

#### Labs
- Pairing Lab: Enumerables
- Solo lab: OO Person
- catch up on previous labs

---

### W1 Thursday

#### Self-check questions
- What examples (at least three) are there for one-to-many relationship type?
- How do I draw Entity Relationship Diagram (ERD, or domain model) to represent this type of the relationship?
- What does Signle Source of Truth Principle mean?
- What steps do I need to do to connect two classes
- What is the naming convention for a class method and for an instance method?

#### Labs
Solo lab: OO My Pets

Topics In OO - Advanced Class Methods In Ruby
- Introduction To Advanced Class Methods In Ruby
- **Advanced Class Methods** ⭐️
- Advanced Class Methods Lab
- **Puppy Lab** ⭐️
- **Advanced Class Methods Quiz** ⭐️
- **Advanced Class Methods Bookend** ⭐️

Topics In OO - Object Relationships In Ruby
- **Introduction To Object Relationships In Ruby** ⭐️
- Basics Of Object Relationships
- **Belongs To Object Lab** ⭐️
- **Has Many Object** ⭐️
- **Has Many Object Lab** ⭐️
- Collaborating Objects
- Collaborating Objects Lab


- OO Banking
- **Has Many Objects Through** ⭐️
- **Has Many Objects Through Lab** ⭐️
- **Object Relationships Quiz** ⭐️
- **Object Relationships Bookend** ⭐️

---


### W1 Friday

#### Self-check questions
- What examples (at least three) are there for many-to-many relationship type?
- How do I draw Entity Relationship Diagram (ERD, or domain model) to represent this type of the relationship?
- How many models do I need to represent the relationship between e.g. flights and passengers? 
- Where should the data about the passengers live? Where should the data about the flights live? 
- Can I store same piece of data in two places? 

#### Labs
- Catch up on previous labs

---

### W1 Weekend

#### Self-check questions
- How am I feeling?
- What is my process when approaching a lab?
- How much time does a lab takes me? 
- Where am I losing time when doing a lab?
- How many times am I using `binding.pry` (the more, the better)?
- How many instances of seed data should I create for each model? (2-4 for each main model and at 4 for joiners; you should have different number of joiners for different models; some models should have no joiners at all)

#### Labs
- Catch up on previous labs

**TOP PRIORITY: Code Challenge Practice Labs** ⭐️⭐️⭐️

---

## Code Challenge Rubric

We'll publish it next week.

---

## Terminology
