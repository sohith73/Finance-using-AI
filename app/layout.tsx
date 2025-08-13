import type { Metadata } from 'next';
import './globals.css';
import ClerkThemeProvider from '@/components/ClerkThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
    title: "SpendSage - Smart Financial Management",
    description:
        "AI-powered expense tracking app with intelligent insights, smart categorization, and personalized financial recommendations developed by sohith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <head>
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                
              })();
            `,
                  }}
              />
          </head>
          <body
              className={` antialiased dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}
              suppressHydrationWarning
          >
              <ThemeProvider>
                  <ClerkThemeProvider>
                      <Navbar />
                      {children}
                      <Footer />
                  </ClerkThemeProvider>
              </ThemeProvider>
          </body>
      </html>
  );
}
