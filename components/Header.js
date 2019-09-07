import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/view">
        <a style={linkStyle}>View</a>
      </Link>
      <Link href="/upload">
        <a style={linkStyle}>Upload</a>
      </Link>
    </div>
  )
}
