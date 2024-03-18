import * as React from "react";
import "./Button.css";
import Button from "@mui/material/Button";

export default function ButtonPrime(props) {
  return <Button variant={props.variant} style={{ backgroundColor: props.backgroundColor , color: "white" }}>{props.buttonContent}</Button>;
}
