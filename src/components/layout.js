import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Logo from "../images/logo.svg"
import Github from "../images/github.svg"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          margin: "auto",
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header>
          <Link to="/">
            <Logo />
          </Link>
        </Header>
        <main>{children}</main>
        <Footer>
          <Link to="https://github.com/0xTatsu/blog" target="_blank">
            <Github />
          </Link>
        </Footer>
      </div>
    )
  }
}

export default Layout

const Header = styled.header`
  width: 100px;
  margin-bottom: 50px;
  a {
    color: transparent;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  a {
    width: 40px;
    color: transparent;
  }
`
