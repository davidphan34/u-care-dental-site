import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
