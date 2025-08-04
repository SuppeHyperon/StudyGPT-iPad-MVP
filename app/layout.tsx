export const metadata = {
  title: 'StudyGPT',
  description: 'Lern-App mit KI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
