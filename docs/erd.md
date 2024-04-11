# ERD

```mermaid

erDiagram

  USER ||--o| TEACHER : "can have"
  USER ||--o| STUDENT : "can have"

  TEACHER ||--o{ METHOD : "can have"
  TEACHER ||--o{ LOCATION : "can have"
  METHOD ||--o{ QUALIFICATION : "can have"
  METHOD ||--o{ CLASS : "can have"
  CLASS ||--o{ LESSON : "can have"
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
    student  studentId  FK  "optional"
    teacher  teacher        "optional"
    teacher  teacherId  FK  "optional"
    datetime createdAt
    datatime updatedAt 
  }
  STUDENT  {
    number    id         PK
    user      user
    integer   userId     FK
    number    classId    FK "optional"
    class     class         "optional"
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
    integer  userId     FK
    integer  userId     FK
    datetime createdAt
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
    number  id      FK
    enum    name
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
    number   methodId   FK
    method   method
    string   day
    datetime time
    array    lessons
    datetime createdAt
    datatime updatedAt
  }
  LESSON  {
    number   id         PK
    array    bookings
    number   classId    FK "optional"
    class    class         "optional"
    number   methodId   FK
    datetime date
    number   locationId FK
    location location
    method   method
    string   level
    string   material
    string   notes
    datetime createdAt
    datatime updatedAt
  }
  BOOKING  {
    number   id        PK
    number   studentId FK  "optional"
    student  student       "optional"
    number   lessonId  FK
    boolean  guest
    datetime createdAt
    datatime updatedAt
  }
  QUESTION  {
    number   id         PK
    string   content
    answer   answer
    number   answerId   FK
    method   method
    number   methodId   FK
    number   classId   FK
    class    class
    datetime createdAt
    datatime updatedAt
  }
  ANSWER  {
    number   id         PK
    string   content
    number   questionId FK
    question question
    datetime createdAt
    datatime updatedAt
  }


```