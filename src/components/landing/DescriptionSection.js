import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  width: 510px;
  min-width: 510px;
  padding:0;
  margin:0;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  line-height: 1.17;
  color: #ffffff;
  font-size:42px;
`

const Message = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 158px;
  font-size: 16px;
  line-height: 1.88;
  color: #ffffff;
  margin-left: 55px;
`

const Wrapper = styled.div`
  margin-top:158px;
`

const DescriptionSection = () => {
  return (<Wrapper className='w-100 d-flex align-items-center justify-content-center'>
    <Header> We connect the dots and improve efficiency </Header>
    <Message>
      Between 67% and 90% of a product’s post-warranty servicing, maintenance and parts replacement is performed outside its OEM’s distribution network. This entails that the vast majority of a $2 Trillion market space is unstructured and reactive in nature, with inefficiencies throughout the parts distribution channels, and service quality. Our aim is to structure this market through digital transformation and innovative business models at its core.
    </Message>
  </Wrapper>)
} 

export default DescriptionSection