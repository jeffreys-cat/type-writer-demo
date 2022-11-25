// pages/_app.js
import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["vietnamese"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className} style={{ width: "100%", height: "100%" }}>
      <Component {...pageProps} />
    </main>
  );
}
