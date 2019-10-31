import React from 'react'
import styled from 'styled-components'
import BuyForm from './BuySell/BuyForm'
import SellForm from './BuySell/SellForm'

const BuySellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 298px;
  margin-left: 24px;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  background-color: white;
  justify-content: space-between;
`

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ActiveTab = styled.div`
  color: var(--blue-text);
  width: 50%;
  text-align: center;
  border-left: ${props => props.left ? "1px solid var(--medium-gray)" : "none"};
  padding: 15px 0px;
  cursor: pointer;
`

const InactiveTab = styled.div`
  color: var(--dark-text-gray);
  width: 50%;
  text-align: center;
  background-color: var(--light-gray);
  border-left: ${props => props.left ? "1px solid var(--medium-gray)" : "none"};
  border-bottom: 1px solid var(--medium-gray);
  border-radius: 0px 4px 0px 0px;
  padding: 15px 0px;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
`

const CryptoInfoWrapper = styled.div`
  height: 100px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--line-gray);
`

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 24px;
  color: var(--dark-text-gray);
`

const DXDLogo = styled.img`
`

const ETHLogo = styled.img`
`

const LogoAndText = styled.div`
  display: flex;
  flex-direction: row;
`

const LogoText = styled.div`
  margin-left: 10px;
  color: var(--light-text-gray);
`

const BuySell = ({}) => {
  const [currentTab, setCurrentTab] = React.useState(0)
  
  const TabButton = ({currentTab, tabType, left, children}) => {
    if (currentTab === tabType) {
      return (
        <ActiveTab onClick={() => {setCurrentTab(tabType)}} left={left}>
          {children}
        </ActiveTab>
      )
    } else {
      return (
        <InactiveTab onClick={() => {setCurrentTab(tabType)}} left={left}>
          {children}
        </InactiveTab>
      )
    }
  }

  const CurrentForm = ({currentTab}) => {
    if (currentTab === 0) {
      return (
        <BuyForm />
      )
    } else {
      return (
        <SellForm />
      )
    }
  }

  return (
    <BuySellWrapper>
      <TabWrapper>
        <TabButton currentTab={currentTab} tabType={0}>Buy</TabButton>
        <TabButton currentTab={currentTab} tabType={1} left={true}>Sell</TabButton>
      </TabWrapper>
      <ContentWrapper>
        <CryptoInfoWrapper>
          <InfoRow>
            <LogoAndText>
              <ETHLogo src="ether.svg"></ETHLogo>
              <LogoText>Ether</LogoText>
            </LogoAndText>
            <div>1000.000 ETH</div>
          </InfoRow>
          <InfoRow>
            <LogoAndText>
              <DXDLogo src="dxdao-circle.svg"></DXDLogo>
              <LogoText>Dxdao</LogoText>
            </LogoAndText>
            <div>100.000 DXD</div>
          </InfoRow>
        </CryptoInfoWrapper>
        <CurrentForm currentTab={currentTab} />
      </ContentWrapper>
    </BuySellWrapper>
  )
}

export default BuySell
