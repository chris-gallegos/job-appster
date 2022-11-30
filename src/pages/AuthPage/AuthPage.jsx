import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container className="authmain">
        <h2>Welcome to Job Appster</h2>
      <Row>
        <Col>
          <h3
            className="welcome"
            
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? "Not a member yet? Register" : "Already a member? Log in"}
          </h3>
        </Col>
        <Col >
          {showLogin ? (
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </Col>
      </Row>
    </Container>
  );
}