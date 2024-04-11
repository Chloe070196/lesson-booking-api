# ERD

```mermaid

erDiagram

  USER ||--o| TEACHER : "can have"
  USER ||--o| STUDENT : "can have"

  METHOD ||--o{ QUALIFICATION : "can have"
  METHOD ||--o{ CLASS : "can have"
  CLASS ||--o{ LESSON : "can have"
  EVENT ||--o| LESSON : "can have"
  LOCATION ||--o{ LESSON : "can have"
  LESSON ||--o{ BOOKING : "can have"

  STUDENT ||--o{ BOOKING : "can have"
  STUDENT ||--o{ QUESTION : "can have"

  QUESTION ||--o| ANSWER : "can have"
  

  USER {
    number   id         PK
    string   username
    string   password  
    student  student        "optional"
    datatime updatedAt 
  }
  STUDENT  {
    number    id         PK
    user      user
    array     bookings
    array     wishlist
    array     questions
    datetime  createdAt
    datatime  updatedAt
  }
  TEACHER  {
    number   id         PK
    string   shortAbout
    string   about
    user     user       
    datatime updatedAt
  }
  METHOD  {
    number   id         PK
    string   name 
    string   description
    array    classes
    array    lessons
    datetime createdAt
    datatime updatedAt
  }
  QUALIFICATION  {
    number id PK
    string   name
    string   description
    datetime createdAt
    datatime updatedAt
  }
  LOCATION {
    string  country 
    string  city
    string  postalCode
    string  street
    string  notes
    string  gettingThere
  }
  CLASS  {
    number   id         PK
    string   name
    array    students
    string   equipment
    string   level
    array    lessons
    datetime createdAt
    datatime updatedAt
  }
  EVENT {
    number   id         PK
    enum     status 
    datetime startTime
    datetime endTime
    datetime date
  }

  LESSON  {
    number   id         PK
    string   name
    array    bookings
    string   notes
    boolean  cover
    datetime createdAt
    datatime updatedAt
  }
  BOOKING  {
    number   id        PK
    datetime createdAt
    datatime updatedAt
  }
  QUESTION  {
    number   id         PK
    string   content
    answer   answer
    datetime createdAt
    datatime updatedAt
  }
  ANSWER  {
    number   id         PK
    string   content
    datetime createdAt
    datatime updatedAt
  }


```