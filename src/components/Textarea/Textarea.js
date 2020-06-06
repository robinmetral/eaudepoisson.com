import React from "react";
import { css } from "@emotion/core";

import Input from "../Input";

const Textarea = (props) => (
  <Input
    as="textarea"
    {...props}
    css={css`
      resize: vertical;
    `}
  />
);

export default Textarea;
