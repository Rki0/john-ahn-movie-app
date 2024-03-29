import React from "react";

function MainImage(props) {
  return (
    <div
      style={{
        background: `url('${props.image}')`,
        height: "500px",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, cetner",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "30px",
          }}
        >
          <h2 style={{ color: "white" }}>{props.title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
