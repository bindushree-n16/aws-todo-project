# AWS To-Do Application Deployment Project

## Project Overview
This project focuses on deploying a containerized To-Do web application using AWS services. The application is built with Node.js, Express.js, and MySQL, and is being prepared for deployment using AWS cloud infrastructure.

The main goal is to understand how a web application can be containerized, deployed, monitored, and managed using AWS services.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Containerization:** Docker
- **Cloud Platform:** AWS
- **Version Control:** Git and GitHub

## Application Features
- Add new tasks
- View existing tasks
- Store tasks in a MySQL database
- REST API endpoints
- Health check endpoint
- Docker-based application containerization

## AWS Services
The project includes work with the following AWS services:

- Amazon VPC – Network infrastructure
- Public and Private Subnets – Network isolation
- Internet Gateway – Internet connectivity
- NAT Gateway – Outbound internet access for private subnets
- Security Groups – Network traffic control
- Amazon EC2 – Bastion host
- Amazon SNS – Email notifications
- Amazon CloudWatch – Monitoring and alarms

## Project Progress

### Completed
- Developed the To-Do application using Node.js and Express.js
- Connected the application to MySQL
- Created the required database and tasks table
- Built a Docker image
- Ran the application using Docker
- Tested application health endpoint
- Created AWS VPC and subnet architecture
- Configured Internet Gateway and NAT Gateway
- Created security groups
- Launched an EC2 Bastion Host
- Created an SNS topic and email subscription
- Created a CloudWatch dashboard and EC2 CPU alarm

### Pending / Planned
- Amazon RDS database setup
- Amazon ECR image repository and image push
- Amazon ECS deployment
- Application Load Balancer configuration
- Application monitoring and alerts
- Version 2 deployment with zero downtime

## Run the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/bindushree-n16/aws-todo-project.git
cd aws-todo-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file with your own local database settings:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tododb
```

### 4. Start the application
```bash
node app.js
```

Open in your browser:

`http://localhost:3000`

Health check:

`http://localhost:3000/health`

## Learning Outcomes
- Understanding cloud networking using Amazon VPC
- Working with EC2 and AWS security groups
- Containerizing applications using Docker
- Connecting Node.js applications to MySQL
- Understanding AWS monitoring and notifications
- Learning the process of deploying applications on AWS

## Project Status
**In Progress** – The application and initial AWS infrastructure have been developed. Container registry, ECS deployment, and remaining cloud deployment steps are planned.

## Author
Bindushree N
