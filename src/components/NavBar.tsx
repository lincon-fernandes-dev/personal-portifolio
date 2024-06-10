import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-12 py-4">
      <div className="w-1/3">
        <Link href="https://www.linkedin.com/in/lincon-fernandes-bb497613b/" target="_blank">
          Lincon
        </Link>
      </div>
      <div className="flex justify-between gap-8">
        <Link href="/" target="_blank">
          Home
        </Link>
        <Link href="/AboutMe" target="_blank">
          AboutMe
        </Link>
        <Link href="/Portifolio" target="_blank">
          Portifolio
        </Link>
        <Link href="/Services" target="_blank">
          Services
        </Link>
        <Link href="/Experience" target="_blank">
          Experience
        </Link>
      </div>
    </nav>
  )
}