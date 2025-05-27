import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>UCare Dental</title> 
        <meta name="description" content="Gentle, high-quality dental care in San Diego." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ucare_icon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
      <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          style: {
            background: '#dadad8',
            color: '#2a4861',
            fontSize: '1.3rem',
            fontFamily: 'Quicksand, sans-serif',
          },
          success: {
            iconTheme: {
              primary: '#22c18f',
              secondary: '#faf7f5',
            },
          },
        }}
      />
    </>
  );
}
