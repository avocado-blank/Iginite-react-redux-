import { createGlobalStyle } from 'styled-components'

const Globalstyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }

    body {
        width: 100%;
        a {
            text-decoration: none;
        }
        background: whitesmoke;
    }

    h2{
        font-size: 2rem;
        color: #ff6767;
    }

    h3{
        font-size: 1rem;
        padding: 1.5rem 0rem;
        color: black
    }

    p{
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.5rem;
        color: gray;
    }

    img{
        display: block;
    }
`

export default Globalstyles
