# Entities

## user

anyone visiting the platform

- view only
- can register
- can use a contact form otherwise

## student

anyone who has signed up as a student and then logged in

- CRUD on bookings
- can request to be added to a class
- can save classes / lessons that they are interested in

## teacher

the person who is registered as a teacher and who has logged in

- has admin rights
- CRUD methods for classes, locations, lessons, qualifications, and questions / answers

## methods

What is taught (eg contemporary dance / ballet / pilates / ...)

- 1:m to classes

## qualifications

- m:1 to teacher
- m:m to methods
- m:m to classes

## lessons

an occurence of a class - shares its properties, and is also bound to a time and place

## booking

an occurence of a lesson tied to a student

## question

a question either left by a user, or added to the FAQ by the teacher

## answer

the answer (1:1 to question) left by the teacher