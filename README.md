# BuildPage
Functionality Implemented:
GET Mini Projects
Route: GET /api/mini-projects

Purpose: Fetch and return all mini project data from the database.

Access: Open to all users (no authentication needed).

Response: JSON array of mini project objects.

Backend Stack Used:
Server: Node.js + Express.js

Database: MongoDB (local instance: mongodb://127.0.0.1:27017/mini-projects)

ODM: Mongoose

Other Tools: CORS, body-parser (via express.json())

Directory Structure (Relevant to Mini Projects):
build_page/
├── app.js
├── config/
│   └── db.js             
├── models/
│   └── Mini.js          
├── routes/
│   └── mini.js           
├── controllers/
│   └── miniController.js

Testing Performed:
Used curl to test GET endpoint:
curl -X GET http://localhost:5000/api/mini-projects
Result: Received empty array initially ([]). After adding sample entries, correct data was retrieved in JSON format.
