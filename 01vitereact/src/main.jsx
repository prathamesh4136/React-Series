import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank' >visit google</a>
)

const reactELement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
 
 <App/>
)
