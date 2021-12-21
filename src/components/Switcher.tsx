import React, { useState } from "react";

const switcherWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,
};

const onStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "green",
  width: 50,
  color: "white",
  fontWeight: 600,
  fontSize: 16,
  padding: 5,
  marginRight: 10,
  cursor: "pointer",
};

const offStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
  width: 50,
  color: "white",
  fontWeight: 600,
  fontSize: 16,
  padding: 5,
  marginRight: 10,
  cursor: "pointer",
};

export default function Switcher() {
  let [isOn, setIsOn] = useState(false);

  const indicatorStyle = {
    width: 28,
    height: 28,
    borderRadius: 30,
    border: "2px solid black",
    backgroundColor: isOn ? "green" : "red",
  };

  return (
    <div style={switcherWrapperStyle}>
      <div style={onStyle} onClick={() => setIsOn(true)}>
        On
      </div>
      <div style={offStyle} onClick={() => setIsOn(false)}>
        Off
      </div>
      <div style={indicatorStyle}>&nbsp;</div>
    </div>
  );
}
