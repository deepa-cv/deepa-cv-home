import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: gradient,
          backgroundSize: "1200% 1200%",
        }}
        // className="title  bgstyle min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
        <Typist>
            <div className="lead typist">
              <h4> {"  "} </h4>
            </div>
          </Typist>
          <h1 ref={ref} className="display-1">
            {title} 
          </h1>
          <Typist>
            <div className="lead typist">
              <h4> {"  "} </h4>
            </div>
          </Typist>
          <Typist>
            <div className="lead typist">
              <h4> {message} </h4>
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                // aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
            <a
                key={`social-icon-3`}
                target="_blank"
                rel="noopener noreferrer"
                href={"mailto:deepachalapathi17@gmail.com"}
                // aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fa fa-envelope  fa-3x socialicons`} />
              </a>
          </div>
          {/* <a
            className="btn btn-outline-dark btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a> */}
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
