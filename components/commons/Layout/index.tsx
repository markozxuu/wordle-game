import Navbar from '../Navbar'
// Styles
import s from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className={s.container}>
    <Navbar />
    {children}
  </div>
)

export default Layout
