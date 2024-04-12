import React from "react";

export default function About() {
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              About website
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>
                This is a basic web application using the React library.
              </strong>{" "}
              It is created as behalf of small showcase of React components and
              function based components. In this web application different
              features are avaiable for the normal use, in which user can
              manipulate the text on the basis of it's case like user can change
              the text in LowerCase and UpperCase. Apart from that user can
              change the lower case words into the Sentence Case. User also
              clear the text and copy the whole text in one click.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Contact information
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>
                If you have any queries then write on the given links:
              </strong>
              <br />
              <a href="http://www.linkedin.com/in/ravipratap98">LinkedIn</a>
              <a href="mailto:ravirajput31198@gmail.com">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
