# Software Requirements

#### Product Vision

This app gives jr. developers a way to find solutions to common code problems, Dynamically Code CoLab-orate on how to solve them, and save their work. It is a hybrid betwen Leet Code and Stack Overflow, and a vast improvement over them both. The Code CoLab environment brings a unique Code CoLab-orating experience to coding.

**Solving:** A common theme with DSA (especially for Boot Camp developers) is getting in the weeds. We want to create a virtual space that creates support and communication channels for developers as they strengthen their DSA skills.

**Importance:** Sound understanding of DSA is required for job readiness. This application will help developers get to that point through creating a virtual community to do so.

#### Scope In/out

This app will provide a means for users to Code CoLab-orate on common code problems.

#### In

- Admin can see all resources posted by users to DSA questions
- The user will be able to save their work used.
- The user will be able to share/export their work as a file.
- Users will be able to “Star” their favorite points of the Code CoLab-oration as a resource.
- Users can join active rooms
- Use socket.io to give users option to create a room or join a room
- Users will be able to see active rooms, what question is being worked on, and how many people are in the room.
- Users can chat with other developers as they work through problems
- Chat active when a room is created and available to only those users in the room
- Each Code CoLab-oration will contain associated resources and reviews of the user’s experiences.

### Out

This website/App will wil have the potential to turn into an IOS or Android app. An MIT license will not be added.

### MVP and functional requirement

- User account with persistent data saved in DynamoDB.
- Admin can see all resources posted by users to DSA questions
- Users can join active rooms
- Users can create new rooms and select questions to work on
- Users can chat with other jr. developers in the room as they work through problems together in real time
- Users can "star" important communication shared in the chat to be saved as a resource for that problem
- Users can wave a flag signalling for help with Code CoLab
- Embedded IDE
- Switching between IDE and whiteboard
- One user is active at a time on IDE/whiteboard???

#### Stretch Goals

- Whiteboard embedding≠
- Users can secure room privacy with password
- Users can request entry into private room
- System/user sets the room temperature??? How's this done??

### Code CoLab Work Flow

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

### Non-Functional Requirements

- User identity is managed with ????
- User data is saved by DynamoDB
- Security??
- Usability??
- Testability??

## [Back to README.MD](../README.MD)
