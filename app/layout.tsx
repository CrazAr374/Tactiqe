import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tactiqe - Build Your MVP in 10 Days',
  description: 'Web & Python-Based Development Solutions with rapid delivery times. MVP development in 10 days, small projects in 5, mini projects in 2.',
  icons: {
    icon: [
      { url: "https://ideogram.ai/assets/image/lossless/response/KmxM8OxDT1ywasEccfbYYA" }
    ],
    shortcut: [
      { url: "https://ideogram.ai/assets/image/lossless/response/KmxM8OxDT1ywasEccfbYYA" }
    ],
    apple: [
      { url: "https://ideogram.ai/assets/image/lossless/response/KmxM8OxDT1ywasEccfbYYA" }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="https://ideogram.ai/assets/image/lossless/response/KmxM8OxDT1ywasEccfbYYA" />
        <link rel="apple-touch-icon" href="https://ideogram.ai/assets/image/lossless/response/KmxM8OxDT1ywasEccfbYYA" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div className="flex min-h-screen flex-col w-full">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}