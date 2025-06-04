import styled from "styled-components"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { FaGithub, FaTelegram } from "react-icons/fa"

export const CVPage = () => {
  return (
    <Wrapper>
      <Paper>
        <LeftSidePaper>
          <UpperLeftSidePaper>
            <UserInfo>
              <Username>Кирилл Попов</Username>
              <Profession>
                <b>Back-end</b> <span style={{ fontWeight: "lighter" }}>Developer</span>
              </Profession>
            </UserInfo>
            <UserDetails>
              <UserContactWrapper>
                <UserContactIcon>
                  <FiMapPin size={"1.5rem"} />
                </UserContactIcon>
                <UserContactLink>Россия, Санкт-Петербург</UserContactLink>
              </UserContactWrapper>
              <UserContactWrapper>
                <UserContactIcon href={"tel:79992298886"}>
                  <FiPhone size={"1.5rem"} />
                </UserContactIcon>
                <UserContactLink>+7 (999) 229 88 86</UserContactLink>
              </UserContactWrapper>
              <UserContactWrapper>
                <UserContactIcon href={"mailto:diplomatgmg@gmail.com"}>
                  <FiMail size={"1.5rem"} />
                </UserContactIcon>
                <UserContactLink>diplomatgmg@gmail.com</UserContactLink>
              </UserContactWrapper>
            </UserDetails>
            <UserLinkWrapper>
              <UserSocial href={"https://t.me/diplomatgmg"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaTelegram width={"2.5rem"} height={"2.5rem"} />
              </UserSocial>
              <UserSocial href={"https://github.com/diplomatgmg"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaGithub width={"2.5rem"} height={"2.5rem"} />
              </UserSocial>
            </UserLinkWrapper>
          </UpperLeftSidePaper>
          <BottomLeftSidePaper>2</BottomLeftSidePaper>
        </LeftSidePaper>
        <RightSidePaper>3</RightSidePaper>
      </Paper>
      <Paper />
    </Wrapper>
  )
}

const A4WidthPx = 1558
const A4HeightPx = 2246
const BlockPadding = "1.75rem"

const PrimaryTextColor = "#f8f8f8"
const SecondaryTextColor = "#e5e5e5"

const Wrapper = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
`

const Paper = styled.div`
  background: white;
  width: ${A4WidthPx}px;
  height: ${A4HeightPx}px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
`

const LeftSidePaper = styled.div`
  width: 30%;
  background-color: #ccc; // FIXME
  color: ${PrimaryTextColor};
`

const UpperLeftSidePaper = styled.div`
  background: #00ffff;
  background: linear-gradient(45deg, rgba(0, 123, 255, 1) 0%, rgba(0, 79, 163, 1) 100%);
  padding: ${BlockPadding};
`

const Username = styled.h1`
  font-size: 3.5rem;
  line-height: 1;
  letter-spacing: 1px;
  margin: 0;
  color: ${PrimaryTextColor};
`

const Profession = styled.h6`
  margin: 0;
  color: ${SecondaryTextColor};
  font-size: 2rem;
`

const UserInfo = styled.div`
  margin: ${BlockPadding};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const UserDetails = styled.h6`
  margin: ${BlockPadding} ${BlockPadding} 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UserContactWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

const UserContactLink = styled.a`
  color: ${PrimaryTextColor};
  font-weight: lighter;
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-style: italic;
`

const UserLinkWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  margin: 1.5rem ${BlockPadding} 0;
`

const Icon = styled.a`
  display: flex;
  width: fit-content;
  height: fit-content;
  color: ${PrimaryTextColor};
  opacity: 0.9;
  background-color: rgba(108, 180, 255, 0.25);
  border-radius: 40%;
`

const UserContactIcon = styled(Icon)`
  padding: 0.5rem;
`

const UserSocial = styled(Icon)`
  padding: 0.75rem;
`

const BottomLeftSidePaper = styled.div``

const RightSidePaper = styled.div`
  width: 60%;
`
