# ERD

```mermaid


erDiagram

  USER ||--o| TEACHER : "can have"
  USER ||--o| STUDENT : "can have"

  METHOD ||--o{ QUALIFICATION : "can have"
  METHOD ||--o{ CLASS : "can have"
  METHOD ||..o{ QUESTION: "can have"
  
  CLASS |o--o{ LESSON : "can have"
  CLASS ||..o{ QUESTION : "can have"
  CLASS }o..o{ STUDENT : "can have"
  
  TIMESLOT ||--o| LESSON : "can have"
  LOCATION ||--o{ LESSON : "can have"
  LESSON ||--o{ BOOKING : "can have"
  STUDENT ||--o{ BOOKING : "can have"
  QUESTION ||--o| ANSWER : "can have"

  USER {
    number   id         PK
    string   username
    string   email
    string   password
  }
  STUDENT  {
    number    id         PK
    array     bookings
    array     wishlist
    datetime  createdAt
    datetime  updatedAt
  }
  TEACHER  {
    number   id         PK
    string   intro
    array    aboutParagraphs
    string   portraitImgUrl
    string   about
    user     user
  }
  METHOD  {
    number   id         PK
    string   name
    string   description
    array    classes
    array    lessons
  }
  QUALIFICATION  {
    number id PK
    string   name
    string   description
    datetime obtainedOn
    string   issuedBy
    string   notes
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
    string   equipment
    string   level
  }
  TIMESLOT {
    number   id         PK
    boolean  available
    string   activity
    datetime startTime
    datetime endTime
    datetime date 
  }
  LESSON  {
    number   id         PK
    string   name
    string   notes
    boolean  cover
  }
  BOOKING  {
    number   id        PK
    number   attendees
    string   note
  }
  QUESTION  {
    number   id         PK
    string   content
  }
  ANSWER  {
    number   id         PK
    string   content
  }

```

## Note

Every single entity will also have the following properties:

- `datetime createdAt`
- `datetime updatedAt`

For the sake of readability, they have been removed from the ERD.
