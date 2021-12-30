import React, { useState } from "react";

const switcherWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,
};

const titleStyle = {
  marginRight: 10,
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

type SwithcerType = {
  value: boolean;
  setSwitcherValue: (value: boolean) => void;
};

export default function Switcher(props: SwithcerType) {
  const indicatorStyle = {
    width: 28,
    height: 28,
    borderRadius: 30,
    border: "2px solid black",
    backgroundColor: "grey",
  };

  const filterOnHandler = () => props.setSwitcherValue(true);
  const filterOffHandler = () => props.setSwitcherValue(false);

  indicatorStyle.backgroundColor = props.value ? "green" : "red";

  return (
    <div style={switcherWrapperStyle}>
      <h2 style={titleStyle}>Controlled Switcher: </h2>
      <div style={onStyle} onClick={filterOnHandler}>
        On
      </div>
      <div style={offStyle} onClick={filterOffHandler}>
        Off
      </div>
      <div style={indicatorStyle}>&nbsp;</div>
    </div>
  );
}
