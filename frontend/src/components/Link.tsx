import styled from "styled-components"
import type { ComponentPropsWithoutRef, FC } from "react"

type LinkProps = ComponentPropsWithoutRef<"a">

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <StyledLink target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`
