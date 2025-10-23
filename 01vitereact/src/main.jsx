import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'A',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//         children: 'click to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const username = 'david roy'

const ReactElement = React.createElement(
    'a',
    {href:'https://google.com', target: '_blank'},
    'click here to visit google',
    username

)

createRoot(document.getElementById('root')).render(
  
    // anotherElement
    ReactElement

    //<App/>

)
