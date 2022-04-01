import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;400;700&display=swap");

    :root {
        --background: #e6eaf9;
        --dark-gray: #414252;
        --faded: #969aab;
        --text: #f13a68;
        --bulb: #e9da11;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 1.2px;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background: var(--background);
        font-family: "Inconsolata", monospace;
    }

    span, li {
        color: var(--dark-gray);
        font-weight: normal;
    }

    button {
        border: none;
        outline: none;
        background: none;
        color: var(--faded);
        cursor: pointer;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: square;
        list-style-position: inside;
    }

    a,
    a:visited,
    a:hover,
    a:active {
        color: inherit;
        text-decoration: none;
    }

    .dark {
        nav {
            background: black;
            color: var(--background);
            h3 {
                color: var(--text);
            }
            button {
                color: var(--bulb);
            }
        }

        form {
            background: black;
            box-shadow: 0 0 8px var(--text);
            > div {
                background: var(--dark-gray);
                box-shadow: none;
                input, button {
                    color: var(--background);
                }
            }
        }

        section {
            background: var(--dark-gray);
            a {
                box-shadow: 0 0 20px black;
                background: black;
                color: var(--background);
                &:hover{
                    box-shadow: none;
                    transform: scale(1.1);
                }
                span, h1 {
                    color: var(--text);
                }
            }

            h3 {
                color: var(--background);
            }
        }

        .fetchBtn {
            color: var(--text);
            box-shadow: 0 -5px 20px black;
        }

        .details-container {
            background: var(--dark-gray);
            div {
                box-shadow: 0 0 20px black;
                background: black;
                color: var(--background);
                span, li, h1 {
                    color: var(--text);
                }
            }

            button {
                box-shadow: 4px 4px 8px black;
                background: black;
                color: var(--faded);
                span {
                    color: var(--faded);
                }
                &:hover {
                    color: var(--background);
                    span {
                        color: var(--background);
                    }
                }
            }
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export default GlobalStyles