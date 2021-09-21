import React from 'react'

import { Button, ExampleComponent } from 'component-plugin-library-template'
import 'component-plugin-library-template/dist/index.css'

const App = () => {
  return (
    <div className=''>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button />
    </div>
  )
}

export default App
