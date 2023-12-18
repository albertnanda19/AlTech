import './globals.css'

export const metadata = {
  title: 'AlTech',
  description: 'Pamerkan dan Temukan Berbagai Projek dari IT Developer!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>
          {children}
        </main>
        Footer
      </body>
    </html>
  )
}
