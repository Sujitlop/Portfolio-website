import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AWS AI Chatbot - Summer Project"
              description="Developed an AI chatbot using Amazon Bedrock and Lambda to address university queries related to tuition, MFA, Workday, and other services. This solution replaced an outdated chatbot that was never helpful enough, eliminating the need to spend a lot of time on phone calls. The chatbot significantly reduced support call times from 30-40 minutes, improving overall helpdesk efficiency. Built with Python, Amazon Bedrock, Lambda, and CloudWatch for monitoring."
              ghLink="https://github.com/sujitlopchan"
              demoLink="https://helpdesk.latech.edu/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Database - Airline Reservation System"
              description="Developed a comprehensive airline reservation system using SQL and Python, featuring real-time seat availability updates and automated booking confirmations. The system improved operational efficiency by reducing manual data entry errors and streamlining the booking process for customers."
              ghLink="https://github.com/Sujitlop/Database_Project"
              demoLink="https://project-two.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QR Sanitizer - Freshman Project"
              description="Developed a QR code sanitizer application using Python and OpenCV, designed to identify and neutralize malicious QR codes in real-time. The application improved security measures for public spaces by providing an efficient solution to detect potential threats embedded in QR codes."
              ghLink="https://github.com/Sujitlop/QR_Sanitizer"
              demoLink="https://project-three.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
