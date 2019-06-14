// Import Modules
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Global Styles Reset
export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
`;
