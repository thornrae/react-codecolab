## User Stories

|     | Description                                                                                           | Est. Time |
| --- | ----------------------------------------------------------------------------------------------------- | --------- |
| 1.  | As a Jr. developer I want to be able to sharpen my DSA skills.                                        |           |
| 2.  | As a Jr. developer I want to be able to collaborate with other developers to strengthen my DSA skills |           |
| 3.  | As a Jr. developer I want to be able to save resources I used to solve DSA problems.                  |           |
| 4.  | As a Jr. developer I want to be able to join a CoLab room based on current activity.                  |           |
| 5.  | As a Jr. developer I want to be able to track my progression with DSA concepts (STRETCH GOAL)         |
|     |

## Feature Tasks

1. Admin can see all resources posted by users to DSA questions
1. Users can join active rooms
1. Users can create new rooms and select questions to work on
1. Users can chat with other jr. developers in the room as they work through problems together in real time
1. Users can "star" important communication shared in the chat to be saved as a resource for that problem

## Acceptance tests

1. Ensure that the user can enter a Code CoLab room when the conditions are right
1. Ensure that upon entry the user does not interrupt the current Code CoLab in progress
1. Ensure that the \* tagging ican be successfully save into the database
1. Ensure that if user accidentally exits the Code CoLab room his/her work is not destroyed

## Software Requirements

#### Product Vision

This app gives users a way to find solutions to common code problems and save their work. It is a hybrid betwen Leet Code and Stack Overflow and a vast improvement over them both.

#### Scope

This app will provide a means for users to Code CoLab-orateon common code problems

The user will be able to save their work used.

The user will be able to share/export their work as a file.

#### MVP and functional requirement

- User account with persistent data saved in DynamoDB.
- Admin can see all resources posted by users to DSA questions
- Users can join active rooms
- Users can create new rooms and select questions to work on
- Users can chat with other jr. developers in the room as they work through problems together in real time
- Users can "star" important communication shared in the chat to be saved as a resource for that problem
- Users can wave a flag signalling for help with Code CoLab
- Embed IDE
- Switching between IDE and whiteboard
- One user is active at a time on IDE/whiteboard???

#### Stretch Goals

- Whiteboard embedding≠
- Users can secure room privacy with password
- Users can request entry into private room
- System/user sets the room temperature??? How's this done??

#### Code CoLab Work Flow

**Main activity** --> Upon entry to the site/app User is presented with options

- Option 1: login/signup
- Option 2: join in on Code CoLab in progress
- Option 3: create new Code CoLab environment

**Code CoLab activity** --> User can chose next steps

1. Start chatting with other jr. Code CoLab-otators
2. Request control of IDE/whiteboard???
3. User can save work

**Entry point** --> Authenticated user can join Code CoLab session by:

- Authenticated user can view previous saved work.
- Authenticated user can navigate to enter chat or just view work in progress
- User can also sign out (if desired).

#### Non-Functional Requirements

- User identity is managed with ????
- User data is saved by DynamoDB
-

[Back to README.MD](../README.MD)
