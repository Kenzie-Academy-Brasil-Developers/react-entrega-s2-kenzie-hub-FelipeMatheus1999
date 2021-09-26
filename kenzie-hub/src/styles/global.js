import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --gray: #CDCDCD;
        --purple: #7540E5;
        --purple2: #2F2E41;
        --white: #FFFFFF;
        --lilac: #EDEAF0;
        --black: #000000;
        --red: #E30;
    }

    body {
        background: var(--lilac);
        font-family: inter;
    }

    border-style, input, button {
        // font and font-size
    }

    h1, h2, h3, h4, h5, h6 {
        //font nad font-size
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
