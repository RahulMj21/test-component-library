import { render } from "@testing-library/react";
import React from "react";

import Button from "./Button";

describe("Button", () => {
    test("testing the Button component", () => {
        render(<Button label="Hello World!" />);
    });
});
