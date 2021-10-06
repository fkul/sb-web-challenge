import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, defaultTheme } from "./Layout.styles"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Head>
        <title>SB Web Challenge</title>
        <meta name="description" content="SB Web Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
