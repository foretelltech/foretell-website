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
  },
  {
    img: predictiveChartImg,
    header: 'Advance Predictive Systems',
  },
  {
    img: computerImg,
    header: 'Seamless Integration',
  },
  {
    img: computerImg,
    header: 'Cloud Based Applications',
  },
]

const SectionHeader = styled.div`
  font-family: 'Mont', sans-serif;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.29;
  color: #ffffff;
  margin-bottom: 58px;
`

const Header = styled.div`
  width: 209px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 25px;
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
  height: 285px;
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
    cursor: pointer;
    opacity: 0.7;
    border: solid 1px #4742c2;
    background-image: linear-gradient(to top, #353186, #050824 100%);
  }
`

const Img = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`

const Card = ({img, header, description}) => {
  return (<CardWrapper >
    <Img>
      <img src={img} alt='img'/>
    </Img>
    <Header>
      {header}
    </Header>
    <Description>
      {description}
    </Description>
  </CardWrapper>)
}

const Wrapper = styled.div`
  margin-top: 50px;
`

const Cards = () => {
  return (<Wrapper className='d-flex align-items-center justify-content-between w-100'>
    {data.map((item, index) => (<div key={index}>
      <Card {...item} />
    </div>))}
  </Wrapper>)
} 

export default Cards