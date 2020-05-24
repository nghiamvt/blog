import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import { rhythm } from "../utils/typography"
import Logo from "../images/logo.svg"
import { useScrollPosition } from "../hooks/use-scroll-position"

export default function TopBarMenu() {
  const [isTop, setIsTop] = React.useState(true)
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y === 0) setIsTop(true)
    if (prevPos.y === 0 && currPos !== 0) setIsTop(false)
  }, 0)
  return (
    <StyledTopBarMenu hideBackground={!isMenuOpen && isTop}>
      <div>
        <Link to="/">
          <Logo style={{ width: `100px` }} />
        </Link>
        <HamburgerIcon onClick={() => setMenuOpen(!isMenuOpen)} />
        {/* <div className="menu">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>
    </StyledTopBarMenu>
  )
}

function HamburgerIcon(props) {
  return (
    <>
      <input type="checkbox" id="menu-btn" onClick={props.onClick} />
      <label htmlFor="menu-btn">
        <span />
      </label>
    </>
  )
}

const StyledTopBarMenu = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${({ hideBackground }) => {
    return hideBackground
      ? css`
          background: transparent;
        `
      : css`
          background: rgb(255, 255, 255) !important;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px !important;
        `
  }};

  transition: background 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 1.3125rem;
    max-width: ${rhythm(32)};
    margin: 0 auto;
  }

  a {
    color: #4a4a4a;
    :hover {
      color: #3273dc;
    }
  }

  .menu a {
    padding: 0 16px;
  }
  @media (min-width: 600px) {
    .menu {
      display: flex;
      align-items: center;
    }
    label {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .menu {
      display: none;
    }
    label {
      display: block;
    }
    > div {
      flex-wrap: wrap;
    }
    input:checked {
      ~ .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        a {
          display: block;
          padding: 16px 0;
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  /* menu icon */
  label {
    right: 0;
    top: 0;
    cursor: pointer;
    padding: 10px;

    span {
      background-color: #333;
      display: block;
      height: 2px;
      position: relative;
      transition: all 0.2s ease-out;
      width: 18px;

      :before,
      :after {
        background-color: #333;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }

      :before {
        top: 5px;
      }

      :after {
        top: -5px;
      }
    }
  }
  input {
    display: none;

    :checked ~ label span {
      background-color: transparent;
      :before,
      :after {
        top: 0;
      }
      :before {
        transform: rotate(-45deg);
      }
      :after {
        transform: rotate(45deg);
      }
    }
  }
`
