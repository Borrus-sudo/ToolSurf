import type React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Toolsurf - All the tools you need',
    description: 'Find the perfect tools for your worflow!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    forcedTheme="dark"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
