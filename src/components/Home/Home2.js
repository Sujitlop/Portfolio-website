import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a dedicated and results-driven Computer Science student at Louisiana Tech University 
              (Sept 2023 - Present) with a passion for building innovative solutions that make a real impact. 
              Currently working as an IT Support Specialist at LA Tech IT Helpdesk (May 2024 - Present), 
              I combine technical expertise with problem-solving skills to resolve IT issues, perform secure 
              data sanitization, and complete computer imaging and deployments.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript, PHP, SQL, HTML, and CSS{" "}
                </b>
              </i>
              — and I'm continuously expanding my skills in cloud computing and AI technologies, 
              with hands-on experience in AWS services.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  AI-powered Applications, Cloud Solutions,{" "}
                </b>
              </i>
              and exploring AWS services like Bedrock, Lambda, and CloudWatch.
              <br />
              <br />
              As part of the AWS Helpdesk team, I developed an
              <b className="purple"> AI Chatbot using Amazon Bedrock and Lambda </b> that replaced 
              an outdated chatbot and reduced support call times from 30-40 minutes, significantly 
              improving helpdesk efficiency. I'm also certified in <b className="purple">AWS Generative AI Foundations</b>, 
              demonstrating my commitment to staying current with cutting-edge technologies.
              <br />
              <br />
              Beyond technical work, I serve as <b className="purple">President</b> of the Namaste Nepal Association, 
              leading cultural awareness initiatives and organizing community events at Louisiana Tech.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
