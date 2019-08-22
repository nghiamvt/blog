import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Logo from "../images/logo.svg"
import Github from "../images/github.svg"

export default function Layout(props) {
  return (
    <Wrapper>
      <header>
        <Link to="/">
          <Logo />
        </Link>
      </header>
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
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  header {
    margin-bottom: 48px;
    a {
      color: transparent;
      display: inline-block;
    }
    svg {
      width: 100px;
    }
  }

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
