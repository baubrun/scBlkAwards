import React  from "react";


export const ProgressBar = (props) => {

  return (
    <div className="progress"  style={{width: "200px"}}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{width: props.progressPercent}}
      >
      </div>
    </div>
  );
};
