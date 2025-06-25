import Link from "next/link"
import DesktopNavbar from "./DesktopNavbar"

const Navbar = () => {
  return (
    <nav className="top-0 fixed w-full border-b bg-background-black/20 backdrop-filter-blur">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-14">
          <div>
            <Link href="/" className="text-xl font-bold font-mono">Social Media App </Link>
          </div>
          
          <DesktopNavbar />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
