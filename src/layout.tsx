import React from "react"
import { Providers } from "@escola-dnc/dnc-design-system"
interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  )
}
export default Layout