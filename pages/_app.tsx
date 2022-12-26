import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Roboto } from '@next/font/google'
// Context
import { SettingsProvider } from '@context/SettingsContext'
// Styles
import '@styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

const App = ({ Component, pageProps }: AppProps) => (
  <SettingsProvider>
    <ThemeProvider
      forcedTheme={(Component as any).theme || undefined}
      attribute="class"
      defaultTheme="system"
    >
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </SettingsProvider>
)

export default App
