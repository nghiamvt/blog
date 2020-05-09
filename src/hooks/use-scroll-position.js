import { useRef, useLayoutEffect } from "react"

const isBrowser = typeof window !== `undefined`

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 }

  return { x: window.scrollX, y: window.scrollY }
}

export function useScrollPosition(clientCallback, wait) {
  const position = useRef(getScrollPosition())

  useLayoutEffect(() => {
    let throttleTimeout = null

    const timeoutCallback = () => {
      const currPos = getScrollPosition()
      clientCallback({ prevPos: position.current, currPos })
      position.current = currPos
      throttleTimeout = null
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(timeoutCallback, wait)
        }
      } else {
        timeoutCallback()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [clientCallback, wait])
}

useScrollPosition.defaultProps = {
  wait: null,
}
