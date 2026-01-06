import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Sujit Lopchan</span>, a dedicated and results-driven{" "}
            <span className="purple">Computer Science student</span> at{" "}
            <span className="purple">Louisiana Tech University</span> (Sept 2023 - Present).
            <br />
            I'm currently working as an{" "}
            <span className="purple">IT Support Specialist</span> at{" "}
            <span className="purple">LA Tech IT Helpdesk</span> (May 2024 - Present), where I resolve IT helpdesk tickets involving hardware, software, and printer troubleshooting, perform secure data sanitization, and complete computer imaging and deployments for university systems.
            <br />
            As part of the AWS Helpdesk team, I developed an AI chatbot to address university queries related to tuition, MFA, Workday, and other services, reducing 30-40 minute support calls and improving overall helpdesk efficiency.
            <br />
            I'm pursuing a <span className="purple">BS in Computer Science</span> with relevant coursework in Computer Architecture, Data Structures and Algorithms, Systems Programming, Database Management Systems, Digital Design, and Discrete Mathematics.
            <br />
            I also serve as <span className="purple">President</span> of the <span className="purple">Namaste Nepal Association</span> (March 2025 - Present), leading the Nepalese Students Association at Louisiana Tech, strengthening cultural awareness, organizing community and campus events, and coordinating volunteers to promote unity in diversity.
            <br />
            <br />
            I'm passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered solutions using AWS Bedrock and Lambda 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud computing and AWS services ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Leading and organizing community events 👥
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating practical solutions that make a real impact 💡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sujit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
