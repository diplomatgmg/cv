import styled from "styled-components"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { FaGithub, FaTelegram } from "react-icons/fa"
import HexletLogo from "@/assets/img/hexlet.png"

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
            <UserSocialWrapper>
              <UserSocial href={"https://t.me/diplomatgmg"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaTelegram size={"2.5rem"} />
              </UserSocial>
              <UserSocial href={"https://github.com/diplomatgmg"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaGithub size={"2.5rem"} />
              </UserSocial>
            </UserSocialWrapper>
          </UpperLeftSidePaper>
          <BottomLeftSidePaper>
            <SectionWrapper>
              <Section>
                <SectionName>Skills</SectionName>
                <SectionItemsWrapper>
                  <SectionItems>
                    <SkillTitle>General Knownledge</SkillTitle>
                    <SkillNames>HTML, CSS, JavaScript, TypeScript</SkillNames>
                    <SkillNames>Git, Github, Gitlab</SkillNames>
                  </SectionItems>
                  <SectionItems>
                    <SkillTitle>Tools & Frameworks</SkillTitle>
                    <SkillNames>HTML, CSS, TypeScript</SkillNames>
                    <SkillNames>HTML, CSS, TypeScript</SkillNames>
                    <SkillNames>HTML, CSS, TypeScript</SkillNames>
                    <SkillNames>HTML, CSS, TypeScript</SkillNames>
                  </SectionItems>
                  <SectionItems>
                    <SkillTitle>General Knownledge</SkillTitle>
                    <SkillNames>HTML, CSS, TypeScript</SkillNames>
                  </SectionItems>
                </SectionItemsWrapper>
              </Section>
            </SectionWrapper>
          </BottomLeftSidePaper>
        </LeftSidePaper>
        <RightSidePaper>
          <Section>
            <SectionName>Profile</SectionName>
            <SectionText>
              Over 3 years of experience as a web front-end engineer who is willing to help businesses make products
              that are accessible and scalable. Core skills include designing, building front-end architectures and
              giving actionable insights that match computer science and web best practices.
            </SectionText>
          </Section>
          <Section>
            <SectionName>Profile</SectionName>
            <SectionExperience>
              <ExperienceHeader>
                <ExperienceHeaderInner>
                  <ExperienceProfession>Front-end Developer</ExperienceProfession>
                  <ExperiencePlaceWork>HokuBit | Ako Pardazesh Novin Iranian</ExperiencePlaceWork>
                </ExperienceHeaderInner>
                <ExperienceHeaderInner>
                  <ExperienceTime>1401/08 - Until Now</ExperienceTime>
                </ExperienceHeaderInner>
              </ExperienceHeader>
              <ExperienceDetailsWrapper>
                <ExperienceText>
                  Designing and implementing features related to cryptocurrencies, such as prediction bot with detailed
                  charts and information, social media analysis and so on. The main focus was on features that help the
                  product achieve the necessary parts of the business model, along with improvements for SEO and
                  accessibility.
                </ExperienceText>
                <ExperienceText>
                  Tools and skills: Chart.js · Daisyui · WebSocket · Redux.js · Highcharts · Tailwind CSS · JavaScript ·
                  React.js
                </ExperienceText>
              </ExperienceDetailsWrapper>
            </SectionExperience>
            <SectionExperience>
              <ExperienceHeader>
                <ExperienceHeaderInner>
                  <ExperienceProfession>Back-end Developer</ExperienceProfession>
                  <ExperiencePlaceWork>Nura Cashflow</ExperiencePlaceWork>
                </ExperienceHeaderInner>
                <ExperienceHeaderInner>
                  <ExperienceTime>1401/01 - 7 Months</ExperienceTime>
                </ExperienceHeaderInner>
              </ExperienceHeader>
              <ExperienceDetailsWrapper>
                <ExperienceText>
                  NURA Cashflow is a web-based software that allows financial and business managers to organize their
                  cash flow and make decisions based on future events. After separating client from server codebase, I
                  worked on several features, improved layout and overall code quality.
                </ExperienceText>
                <ExperienceText>
                  Tools and skills: Chart.js · Figma · Highcharts · Sass · CSS · Tailwind CSS · WordPress · JavaScript ·
                  Vue.js
                </ExperienceText>
                <ExperienceText>
                  Tailwind CSS · WordPress · JavaScript · Vue.js Tools and skills: Chart.js · Figma · Highcharts · Sass
                  · CSS
                </ExperienceText>
              </ExperienceDetailsWrapper>
            </SectionExperience>
            <SectionExperience>
              <ExperienceHeader>
                <ExperienceHeaderInner>
                  <ExperienceProfession>Full-stack Developer</ExperienceProfession>
                  <ExperiencePlaceWork>Freelance</ExperiencePlaceWork>
                </ExperienceHeaderInner>
                <ExperienceHeaderInner>
                  <ExperienceTime>1398 - 3 Years</ExperienceTime>
                </ExperienceHeaderInner>
              </ExperienceHeader>
              <ExperienceDetailsWrapper>
                <ExperienceText>
                  Working as a part-time web developer to help small to medium businesses achieve what they want in the
                  world-wide web.
                </ExperienceText>
              </ExperienceDetailsWrapper>
            </SectionExperience>
          </Section>
          <Section>
            <SectionName>Education</SectionName>
            <EducationItem>
              <EducationImage src={HexletLogo} />
              <EducationWrapper>
                <EducationInfo>
                  <EducationName>Hexlet College</EducationName>
                  <EducationDescription>Front-end Developer</EducationDescription>
                </EducationInfo>
                <ExperienceTime>1398 - 3 Years</ExperienceTime>
              </EducationWrapper>
            </EducationItem>
          </Section>
          <Section>
            <SectionName>Projects</SectionName>
            <ProjectSection>
              <ProjectItem>
                <ProjectIcon />
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon />
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon />
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon />
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon />
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
            </ProjectSection>
          </Section>
        </RightSidePaper>
      </Paper>
    </Wrapper>
  )
}

const A4WidthPx = 1240
const A4HeightPx = 1750
const BlockPadding = "1.25rem"

const SectionTitleFontSize = "1.75rem"
const SectionNameFontSize = "1.5rem"
const SectionTextFontSize = "1rem"

const SquarePrimarySize = "56px"
const SquareSecondarySize = "24px"
const SquarePrimaryBorderRadius = "16px"
const SquareSecondaryBorderRadius = "8px"
const SquareLeftMargin = "72px"

const PrimaryTextColor = "#f8f8f8"
const PrimaryDarkTextColor = "#0A0A0AFF"

const SecondaryTextColor = "#e5e5e5"
const SecondaryTextDarkColor = "#6b6b6b"

const BackgroundPrimaryColor = "rgb(233, 247, 255)"
const BackgroundSecondaryColor = "rgb(195,236,255)"

const Wrapper = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`

const Paper = styled.div`
  background: white;
  width: ${A4WidthPx}px;
  min-height: ${A4HeightPx}px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const LeftSidePaper = styled.div`
  background-color: rgb(233, 247, 255);
  color: ${PrimaryTextColor};
  flex: 0.5;
`

const UpperLeftSidePaper = styled.div`
  background: #00ffff;
  background: linear-gradient(45deg, rgba(0, 123, 255, 1) 0%, rgba(0, 79, 163, 1) 100%);
  padding: ${BlockPadding};

  @media (max-width: 1024px) {
    display: flex;
    padding-bottom: 2.5rem;
    padding-left: 0;
    padding-right: 0;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const Username = styled.div`
  font-size: 2.75rem;
  line-height: 1;
  letter-spacing: 1px;
  margin: 0;
  color: ${PrimaryTextColor};
  font-weight: bold;
`

const Profession = styled.div`
  margin: 0;
  color: ${SecondaryTextColor};
  font-size: 1.5rem;
`

const UserInfo = styled.div`
  margin: ${BlockPadding};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 1.15rem;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-style: italic;
`

const UserSocialWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  margin: 1.5rem ${BlockPadding} 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: start;
  }
`

const Icon = styled.a`
  display: flex;
  width: fit-content;
  height: fit-content;
  color: ${PrimaryTextColor};
  opacity: 0.9;
  background-color: rgba(108, 180, 255, 0.25);
  border-radius: 32px;
`

const UserContactIcon = styled(Icon)`
  padding: 0.5rem;
`

const UserSocial = styled(Icon)`
  padding: 0.75rem;
`

const BottomLeftSidePaper = styled.div``

const SectionWrapper = styled.div`
  padding: ${BlockPadding};
`

const Section = styled.div`
  color: ${PrimaryDarkTextColor};
`

const SectionName = styled.div`
  font-weight: bold;
  font-size: ${SectionTitleFontSize};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`

const SectionItemsWrapper = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const SectionItems = styled.div`
  margin-bottom: 2rem;
`

const SectionText = styled.div`
  font-size: ${SectionTextFontSize};
  color: ${SecondaryTextDarkColor};
`

const EducationItem = styled.div`
  display: flex;
  position: relative;

  &::after {

`

const EducationImage = styled.img`
  height: 32px;
  z-index: 10;
  position: relative;
  left: 12px;
  top: 6px;
`

const EducationWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const EducationInfo = styled.div`
  margin-right: auto;
`

const EducationName = styled.div`
  font-size: ${SectionNameFontSize};
`

const EducationDescription = styled.div`
  color: ${SecondaryTextDarkColor};
  font-size: ${SectionTextFontSize};
  font-weight: lighter;
`

const SectionExperience = styled.div`
  margin-left: 4.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 32px;
    left: -49px;
    width: 10px;
    height: calc(100% + 4rem);
    background-color: ${BackgroundPrimaryColor};
  }

  &:last-child {
    margin-bottom: 0;

    &:before {
      height: calc(100% - 2.25rem);
    }
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: start;
  }
`

const ExperienceHeaderInner = styled.div``

const ExperienceProfession = styled.div`
  font-size: ${SectionNameFontSize};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: ${SquarePrimarySize};
    width: ${SquarePrimarySize};
    border-radius: ${SquarePrimaryBorderRadius};
    left: -${SquareLeftMargin};
    top: -4px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${BackgroundSecondaryColor};
    height: ${SquareSecondarySize};
    width: ${SquareSecondarySize};
    border-radius: ${SquareSecondaryBorderRadius};
    top: 12px;
    left: -56px;
  }
`

const ExperiencePlaceWork = styled.div`
  font-weight: lighter;
  color: ${SecondaryTextDarkColor};
`

const ExperienceTime = styled.div`
  color: ${SecondaryTextDarkColor};
  font-weight: lighter;
  background-color: ${BackgroundPrimaryColor};
  padding: 0.5rem 0.75rem;
  border-radius: 1.5rem;
  height: fit-content;
  width: fit-content;
  font-size: 0.75rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`

const ExperienceDetailsWrapper = styled.div`
  color: ${SecondaryTextDarkColor};
  font-weight: lighter;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`

const ExperienceText = styled.div`
  position: relative;
  font-size: ${SectionTextFontSize};

  &:before {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: 6px;
    width: 24px;
    top: 12px;
    left: -48px;
  }
`

const SkillTitle = styled.div`
  position: relative;
  z-index: 10;
  font-size: ${SectionNameFontSize};
  margin-bottom: 1.5rem;

  &:before {
    content: "";
    position: absolute;
    width: 150px;
    height: 32px;
    background-color: ${BackgroundSecondaryColor};
    z-index: -1;
    rotate: -5deg;
    opacity: 0.75;
  }
`

const SkillNames = styled(SectionText)`
  display: inline-block;
  font-size: ${SectionTextFontSize};
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
  margin-left: 1.5rem;

  &:before {
    content: "●";
    font-size: 1.4rem;
    position: absolute;
    left: -1.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: -21px;
    width: 6px;
    height: calc(100% + 0.5rem);
    background-color: ${SecondaryTextDarkColor};
    opacity: 0.15;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 1024px) {
    margin-left: 0;

    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 0;
    }
  }
`

const RightSidePaper = styled.div`
  flex: 1;
  padding: ${BlockPadding};
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const ProjectSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  &:before {
    content: "";
    position: absolute;
    top: 32px;
    left: 23px;
    width: 10px;
    height: calc(100% + 4rem);
    background-color: ${BackgroundPrimaryColor};
  }

  &:last-child {
    margin-bottom: 0;

    &:before {
      height: calc(100% - 3rem);
    }
  }
`

const ProjectItem = styled.div`
  margin-left: ${SquareLeftMargin};
`

const ProjectIcon = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: ${SquarePrimarySize};
    width: ${SquarePrimarySize};
    border-radius: ${SquarePrimaryBorderRadius};
    left: -${SquareLeftMargin};
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${BackgroundSecondaryColor};
    height: ${SquareSecondarySize};
    width: ${SquareSecondarySize};
    border-radius: ${SquareSecondaryBorderRadius};
    top: 16px;
    left: -56px;
  }
`

const ProjectDetails = styled.div``

const ProjectName = styled.div`
  font-size: ${SectionNameFontSize};
`

const ProjectDescription = styled.div`
  color: ${SecondaryTextDarkColor};
  font-size: ${SectionTextFontSize};
  font-weight: lighter;
`
