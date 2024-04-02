import {ReactNode} from "react"

import {validateConfig} from "../config"

validateConfig()

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div id="container">
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default Layout
