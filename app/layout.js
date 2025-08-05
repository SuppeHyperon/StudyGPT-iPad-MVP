export const metadata = {
  title: 'StudyGPT',
  description: 'Dein smarter Lernplaner mit KI-Unterstützung'
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
