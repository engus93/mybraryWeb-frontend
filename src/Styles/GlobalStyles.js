// Import Modules
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Global Styles Reset
export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        border: none;
    }
    body {
        color: ${props => props.theme.blackColor};
        font-size:14px;
        font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.blackColor};
    }
    input:focus{
        outline:none;
    }
    button {
        cursor: pointer;
        outline: none;
    }
`;
