import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container d-flex align-content-center flex-wrap ">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div
            className="card my-3 mx-3"
            style={{
              backgroundColor: props.mode === "dark" ? "#232540" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <div
              className="card-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <h5 className="card-title">About Website :</h5>
              <p className="card-text">
                <strong>
                  This is a basic web application using the React library.
                </strong>
                &nbsp; It is created as behalf of small showcase of React
                components and function based components. In this web
                application different features are avaiable for the normal use,
                in which user can manipulate the text on the basis of it's case
                like user can change the text in LowerCase and UpperCase. Apart
                from that user can change the lower case words into the Sentence
                Case. User also clear the text and copy the whole text in one
                click.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div
            className="card my-3 mx-3"
            style={{
              backgroundColor: props.mode === "dark" ? "#232540" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Reach Us :</h5>
              <strong>
                If you have any queries then write on the given links:
              </strong>
              <br />
              <br />
              <a
                style={{ textDecoration: "none" }}
                href="http://www.linkedin.com/in/ravipratap98"
              >
                LinkedIn
              </a>
              &nbsp; &nbsp;
              <a
                style={{ textDecoration: "none" }}
                href="mailto:ravirajput31198@gmail.com"
              >
                Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
