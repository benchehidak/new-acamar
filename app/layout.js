"use client";
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";

import store from "../store";
import AuthProvider from "@/components/Provider";
import './globals.css'
import StoreProvider from "@/components/storeprov";



export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link href="https://fonts.cdnfonts.com/css/nexa-bold" rel="stylesheet"/>
          <link href="https://fonts.cdnfonts.com/css/dalek-pinpoint" rel="stylesheet"/>
          <link href="/favicon.ico" rel="shortcut icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;1,700&family=Poppins:wght@300&family=Tilt+Warp&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet"/>
          <link href="https://fonts.cdnfonts.com/css/brittany-signature" rel="stylesheet"/>
          <link rel="manifest" href="/manifest.json"  />
        </head>
          
        <body className="font-inter  custom-tippy dashcode-app">
          <AuthProvider>
            <StoreProvider store={store}>
              {children}
              </StoreProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
