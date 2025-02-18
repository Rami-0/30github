import type { Metadata } from 'next';
import { Suspense } from 'react';
import './global.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Kings } from 'next/font/google';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-raleway',
});
const kings = Kings({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kings',
});

export const metadata: Metadata = {
  title: 'Rami',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body
      className={`${kings.variable} ${raleway.variable} bg-secondary text-primary-foreground h-screen w-screen p-2 `}>
    <Suspense
      fallback={<div className="">loading...</div>}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Suspense>
    <script
      dangerouslySetInnerHTML={{
        __html: `
              (function() {
                const savedTheme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                if (savedTheme === "dark") {
                  document.documentElement.classList.add("dark");
                } else if (savedTheme === "light") {
                  document.documentElement.classList.remove("dark");
                } else {
                  // If "system" or no preference is saved, follow system theme
                  document.documentElement.classList.toggle("dark", prefersDark);
                }
              })();
            `,
      }}
    />
    </body>
    </html>
  );
}
