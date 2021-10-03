import React from "react";

const Exercise = () => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer
        </div>

        <div className="ui primary button">Add Document</div>
      </Segment>
      <Segment>
        <h4 classNam="ui header">For your Information</h4>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </Segment>
    </div>
  );
};

export default Exercise;

const Segment = (props) => {
  return <div className="ui placeholder segment">{props.children}</div>;
};
