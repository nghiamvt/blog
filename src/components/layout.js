import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import TopBarMenu from "./top-menu-bar"
import Github from "../images/github.svg"

export default function Layout(props) {
  return (
    <Wrapper>
      <TopBarMenu />
      <main>{props.children}</main>
      <footer>
        <a
          href="https://github.com/0xTatsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${rhythm(32)};
  padding: 6rem ${rhythm(3 / 4)} ${rhythm(1.5)};

  footer {
    display: flex;
    justify-content: center;
    margin: 16px 0;
    a {
      width: 40px;
      color: transparent;
    }
  }
`
