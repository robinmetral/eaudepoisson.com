import React from "react";
import Blockquote from "./Blockquote";

export default {
  title: "Blockquote",
};

export const base = () => <Blockquote>This is a quote</Blockquote>;

export const large = () => <Blockquote large>This is a quote</Blockquote>;
