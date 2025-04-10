// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <nav className="bg-white shadow p-4 flex gap-6 justify-center text-blue-700 font-medium">
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/form">Form</Link>
        <Link href="/entries">Entries</Link>
      </nav>
        {children}
      </body>
    </html>
  );
}
