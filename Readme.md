# Health Management API

## Overview

This project is a RESTful API for managing Health records, built with Node.js and MongoDB. It includes endpoints for creating, retrieving all, retriving by id, updating, and deleting records.

## Prerequisites

- Node.js
- MongoDB
- Express.js
- Dotenv
- cors

## Installation

1. **Clone the Repository**

2. **Install all the packages**
   ```bash
   npm i
   ```
3. **Create a Health MongoDB database**

4. **Add the health_data.json in MongoDB database**

5. **End-points**

- **GET /health-records**: Retrieve a list of all health records.
- **POST /health-records**: Create a new health record.
- **GET /health-records/:id**: Retrieve a specific health record by ID.
- **PUT /health-records/:id**: Update a health record.
- **DELETE /health-records/:id**: Delete a health record.

  -_You can test this api on postman using **Health.postman_collection.json** file_

6. **This project is already deployed on Render. Go through the Postman JSON documentation, change the URL from localhost to https://health-record-api-1.onrender.com/, and include the endpoint.**
