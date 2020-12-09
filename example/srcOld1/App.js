import React from 'react'
import tw from 'twin.macro'
import Login from './containers/login'
import 'antd/dist/antd.css'
import './styles/main.css'
import styled, { css } from 'styled-components'
import GlobalStore from './GlobalStore'
const className = css`
  ${tw`text-6xl font-bold`}
`
const AppContainer = styled.div.attrs({
  className:
    'flex flex-col justify-center w-full items-center h-screen  bg-gray-100'
})`
  > div {
    ${(props) => (props.test ? tw`w-1/3 ` : '')}
  }
  h1 {
    color: red;
    ${className};
  }
`
function App() {
  return (
    <GlobalStore>
      <AppContainer test={true}>
        <div>
          <Login />
        </div>
      </AppContainer>
    </GlobalStore>
  )
}

export default App
