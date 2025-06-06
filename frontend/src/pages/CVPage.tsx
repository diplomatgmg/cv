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
            <UserLinkWrapper>
              <UserSocial href={"https://t.me/diplomatgmg"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaTelegram width={"2.5rem"} height={"2.5rem"} />
              </UserSocial>
              <UserSocial href={"https://github.com/diplomatgmg"} target={"_blank"} rel={"noopener noreferrer"}>
                <FaGithub width={"2.5rem"} height={"2.5rem"} />
              </UserSocial>
            </UserLinkWrapper>
          </UpperLeftSidePaper>
          <BottomLeftSidePaper>
            <SectionWrapper>
              <Section>
                <SectionName>Skills</SectionName>
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
            <EducationWrapper>
              <EducationImage src={HexletLogo} />
              <EducationInfo>
                <EducationName>Hexlet College</EducationName>
                <EducationDescription>Front-end Developer</EducationDescription>
              </EducationInfo>
              <ExperienceTime>1398 - 3 Years</ExperienceTime>
            </EducationWrapper>
          </Section>
          <Section>
            <SectionName>Projects</SectionName>
            <ProjectSection>
              <ProjectItem>
                <ProjectIcon></ProjectIcon>
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon></ProjectIcon>
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon></ProjectIcon>
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon></ProjectIcon>
                <ProjectDetails>
                  <ProjectName>React FlatifyCSS</ProjectName>
                  <ProjectDescription>
                    A collection of React flat design components, based on FlatifyCSS.
                  </ProjectDescription>
                </ProjectDetails>
              </ProjectItem>
              <ProjectItem>
                <ProjectIcon></ProjectIcon>
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

const A4WidthPx = 1558
const A4HeightPx = 2246
const BlockPadding = "1.75rem"

const PrimaryTextColor = "#f8f8f8"
const PrimaryDarkTextColor = "#0A0A0AFF"

const SecondaryTextColor = "#e5e5e5"
const SecondaryTextDarkColor = "#6b6b6b"

const BackgroundPrimaryColor = "rgb(233, 247, 255)"
const BackgroundSecondaryColor = "rgb(207, 240, 255)"

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
  background-color: rgb(233, 247, 255);
  color: ${PrimaryTextColor};
`

const UpperLeftSidePaper = styled.div`
  background: #00ffff;
  background: linear-gradient(45deg, rgba(0, 123, 255, 1) 0%, rgba(0, 79, 163, 1) 100%);
  padding: ${BlockPadding};
`

const Username = styled.div`
  font-size: 3.5rem;
  line-height: 1;
  letter-spacing: 1px;
  margin: 0;
  color: ${PrimaryTextColor};
  font-weight: bold;
`

const Profession = styled.div`
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

const SectionWrapper = styled.div`
  padding: ${BlockPadding};
`

const Section = styled.div`
  color: ${PrimaryDarkTextColor};
`

const SectionName = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`

const SectionItems = styled.div`
  margin-bottom: 2rem;
`

const SectionText = styled.div`
  color: ${SecondaryTextDarkColor};
  font-size: 1.5rem;
`

const EducationWrapper = styled.div`
  display: flex;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: 80px;
    width: 80px;
    border-radius: 24px;
    top: -6px;
    left: 12px;
  }
`

const EducationImage = styled.img`
  height: 48px;
  z-index: 10;
  position: relative;
  left: 28px;
  top: 6px;
`

const EducationInfo = styled.div`
  margin-right: auto;
  margin-left: 5rem;
`

const EducationName = styled.div``

const EducationDescription = styled.div`
  color: ${SecondaryTextDarkColor};
  font-size: 1.5rem;
  font-weight: lighter;
`

const SectionExperience = styled.div`
  margin-left: 8rem;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 4rem;

  &:before {
    content: "";
    position: absolute;
    top: 32px;
    left: -80px;
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
`

const ExperienceHeaderInner = styled.div``

const ExperienceProfession = styled.div`
  font-size: 2rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: 80px;
    width: 80px;
    border-radius: 24px;
    left: -116px;
    top: -8px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: rgb(124, 215, 255);
    height: 32px;
    width: 32px;
    border-radius: 12px;
    top: 16px;
    left: -90px;
  }
`

const ExperiencePlaceWork = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  color: ${SecondaryTextDarkColor};
`

const ExperienceTime = styled.div`
  color: ${SecondaryTextDarkColor};
  font-size: 1.5rem;
  font-weight: lighter;
  background-color: ${BackgroundPrimaryColor};
  padding: 0.75rem 1rem;
  border-radius: 1.5rem;
  height: fit-content;
`

const ExperienceDetailsWrapper = styled.div`
  color: ${SecondaryTextDarkColor};
  font-weight: lighter;
  font-size: 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ExperienceText = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: 6px;
    width: 24px;
    top: 12px;
    left: -72px;
  }
`

const SkillTitle = styled.div`
  position: relative;
  z-index: 10;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  &:before {
    content: "";
    position: absolute;
    width: 150px;
    height: 42px;
    background-color: ${BackgroundSecondaryColor};
    z-index: -1;
    rotate: -5deg;
  }
`

const SkillNames = styled(SectionText)`
  display: inline-block;
  font-size: 1.5rem;
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
    height: calc(100% + 1rem);
    background-color: ${SecondaryTextDarkColor};
    opacity: 0.15;
  }

  &:last-child::after {
    display: none;
  }
`

const RightSidePaper = styled.div`
  width: 60%;
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
    left: 44px;
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

const ProjectItem = styled.div`
  margin-left: 112px;
`

const ProjectIcon = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background-color: ${BackgroundPrimaryColor};
    height: 64px;
    width: 64px;
    border-radius: 24px;
    left: -96px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: rgb(124, 215, 255);
    height: 24px;
    width: 24px;
    border-radius: 10px;
    top: 20px;
    left: -76px;
  }
`

const ProjectDetails = styled.div``

const ProjectName = styled.div``

const ProjectDescription = styled.div`
  color: ${SecondaryTextDarkColor};
  font-size: 1.5rem;
  font-weight: lighter;
`
