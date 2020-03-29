import React from 'react'
import styled from 'styled-components'
import ankitImg from '../../assets/foretellians/ankit.png'
import davidImg from '../../assets/foretellians/david.png'
import rafaelImg from '../../assets/foretellians/rafael.png'
import arleyImg from '../../assets/foretellians/arley.png'
import eddyImg from '../../assets/foretellians/eddy.png'
import qusaiImg from '../../assets/foretellians/qusai.png'
import camiloImg from '../../assets/foretellians/camilo.png'
import planetImg from '../../assets/foretellians/planet.png'
import AppContainer from '../common/appContainer'

const data = [
  {
    name: 'Dr. Ankit Srivastava',
    role: 'Co-founder',
    profileImg: ankitImg
  },
  {
    name: 'David  Finol',
    role: 'Co-founder',
    profileImg: davidImg
  },
  {
    name: 'Rafael Alvarado',
    role: 'UX/UI Researcher and Designer',
    profileImg: rafaelImg
  },
  {
    name: 'Arley Alvarez',
    role: 'UX/UI Researcher and Designer',
    profileImg: arleyImg
  },
  {
    name: 'Dr. Eddy Attang',
    role: 'Cloud and Modeling Engineer',
    profileImg: eddyImg
  },
  {
    name: 'Qusai Farraj',
    role: 'Software Engineer',
    profileImg: qusaiImg
  },
  {
    name: 'Camilo Barraza',
    role: 'Software Engineer',
    profileImg: camiloImg
  },
]

const Name = styled.div`
  width: 257px;
  height: 30px;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #050824;
`

const Role = styled.div`
  width: 150px;
  height: 28px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.75;
  text-align: center;
  color: #050824;
`

const Icon = styled.div`
  margin-top: 90px;
  margin-bottom: 43px;

`

const Header = styled.div`
  width: 455px;
  height: 64px;
  font-size: 42px;
  font-weight: bold;
  line-height: 1.17;
  text-align: center;
  color: #050824;
  margin-bottom: 47px;
`

const Description = styled.div`
  width: 614px;
  height: 60px;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: #050824;
  margin-bottom: 28px;
`

const Wrapper = styled.div`
  margin-bottom: 100px;
`

const ForetellianWrapper = styled.div`
  margin: 60px 9px;
`

const ProfileImage = styled.div`
  margin-bottom: 21px;
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Foretellian = ({profileImg, role, name}) => {
  return (<ForetellianWrapper className='d-flex flex-column align-items-center justify-content-center'>
    <ProfileImage>
      <img src={profileImg} alt='' draggable={false} />
    </ProfileImage>
    <Name>{name}</Name>
    <Role>{role}</Role>
  </ForetellianWrapper>)
}


const Foretellians = () => {
  return ( <AppContainer >
    <Wrapper className='d-flex flex-column align-items-center justify-content-center'>
      <Icon>
        <img src={planetImg} alt='' draggable={false} />
      </Icon>
      <Header>Meet the Foretellians</Header>
      <Description>A multidisciplinary team of dedicated designers, scientists, researchers and engineers.</Description>
      <div className='d-flex flex-wrap'>
        {data.map((item, index) => (<div key={index}>
          <Foretellian {...item} />
        </div>))}
      </div>
    </Wrapper>
  </AppContainer>
  )
} 

export default Foretellians