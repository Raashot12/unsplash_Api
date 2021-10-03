import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import Exercise from "./Exercise";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="I like this subject"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Rasheed"
          timeAgo="Today at 2:00AM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mistura"
          timeAgo="Yesterday at 5:05PM"
          content="The tutorial make sense"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Akanni"
          timeAgo="Tuesday at 10:45PM"
          content="I love the way he teaches javaScript"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <Exercise />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
