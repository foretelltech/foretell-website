import React from 'react'
import styled from 'styled-components'
import computerImg from '../../assets/computer-copy.svg'
import predictiveChartImg from '../../assets/predictive-chart.svg'
import intersectionImg from '../../assets/intersection.svg'
import cloudComputingImg from '../../assets/cloud-computing.svg'

const data = [
  {
    img: computerImg,
    header: 'Innovative data-driven market incentive',
    description: 'We create unorthodox value for maintenance providers, asset owners, OEMs and their suppliers.'
  },
  {
    img: predictiveChartImg,
    header: 'Advance Predictive Systems',
    description: 'Our applications are powered by state-of-the-art AI and physics-based hybrid predictive systems.'
  },
  {
    img: computerImg,
    header: 'Seamless Integration',
    description: 'Interconnection throughout the value chain make value creation at the key levels possible.'
  },
  {
    img: computerImg,
    header: 'Cloud Based Applications',
    description: 'Our user-facing applications and technical data sharing systems  are highly scalable and cloud-native.'
  },
]

const SectionHeader = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.29;
  color: #ffffff;
  margin-bottom: 58px;
`

const Header = styled.div`
  width: 209px;
  height: 90px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom:10px;
`

const Description = styled.div`
  width: 209px;
  height: 107px;
  font-size: 16px;
  line-height: 1.44;
  color: #ffffff;
`

const CardWrapper = styled.div`
  width: 257px;
  height: 339px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 18px 45px 0 rgba(37, 50, 56, 0.15);
  :hover{
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
    border: solid 1px #4742c2;
    background-image: linear-gradient(to top, #353186, #050824 100%);
  }
`

const Card = ({img, header, description}) => {
  return (<CardWrapper >
    <img src={img} alt='img'/>
    <Header>
      {header}
    </Header>
    <Description>
      {description}
    </Description>
  </CardWrapper>)
}

const Wrapper = styled.div`
  margin-top: 180px;
`

const HowWeDoIt = () => {
  return (<Wrapper className='d-flex flex-column align-items-center justify-content-center w-100'>
    <SectionHeader className='w-100'> How we Do it?</SectionHeader>
    <div className='d-flex w-100 justify-content-between'>
      {data.map((item, index) => (<div key={index}>
        <Card {...item} />
      </div>))}
    </div>
  </Wrapper>)
} 

export default HowWeDoIt