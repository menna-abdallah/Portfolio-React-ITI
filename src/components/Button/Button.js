import * as React from "react";
import "./Button.css";
import Button from "@mui/material/Button";

export default function ButtonpPrime(props) {
  return <Button variant="contained">{props.buttonContent}</Button>;
}
