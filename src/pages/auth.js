import React, { useState } from 'react'
import Layout from "../components/common/layout"
import backgroundGraphics from '../assets/background.svg'
import styled from 'styled-components'
import bcrypt from 'bcryptjs'

const Content = styled.div`
  height:100vh;
`

const Background = styled.div`
  width: 100vw;
  background-image: linear-gradient(to top, #262468, #070927);
`

const BackgroundGraphics = styled.div`
  background-image: url(${backgroundGraphics});
`

const Header = styled.div`
  width: 844px;
  height: 110px;
  font-size: 52px;
  font-weight: bold;
  line-height: 1.06;
  text-align: center;
  color: #ffffff;
  margin-bottom: 64px;
`

const Input = styled.input`
  width: 331px;
  height: 48px;
  border-radius: 4px;
  border: solid 1px #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  font-size: 18px;
  line-height: 1.67;
  text-align: center;
  color: #ffffff;
  margin-bottom: 51px;
  ::placeholder {
    color: #A1A1B2;
  }
`

const Button = styled.button`
  outline: none !important;
  border:none;
  color: white;
  width: 141px;
  height: 50px;
  border-radius: 4px;
  background-color: #5eaf80;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

const Auth = () => {
  const [password, setPassword] = useState("")

  const handleInput = (evt) => {
    setPassword(evt.target.value)
  }

  const verifyPassword = (evt) => {
    evt.stopPropagation()
    evt.preventDefault()
    var urlParams = new URLSearchParams(window.location)
    var redirectPage = getParameterByName('page')
    bcrypt.compare(password, '$2a$04$Z1jhtEnrfE9aEGi9PI.AvOSeqQZ4Ulh3zoCrY5DxazcsDZ6ktJ4sq', function (err, isValid) {
      if (isValid){
        localStorage.setItem('password', password)
        window.location = redirectPage
      }
      else{
        alert('Invalid Password')
      }
    })
  }

  return (<div>
    <Background>
      <BackgroundGraphics>
        <Layout hideLinks>
          <Content className='d-flex flex-column align-items-center justify-content-center'>
            <Header>
            Welcome to the era of decentralized data
            </Header>
            <form onSubmit={verifyPassword} className='d-flex flex-column align-items-center justify-content-center'>
              <Input onChange={handleInput} placeholder="Please type the password" type="password"/>
              <Button onClick={verifyPassword}> Access </Button>
            </form>
          </Content>
        </Layout>
      </BackgroundGraphics>
    </Background>
  </div>)
} 

export default Auth