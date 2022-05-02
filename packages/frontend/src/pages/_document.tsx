import config from "@config";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    const SITE_URL = config.SITE_URL;
    return (
      <Html lang="pt-br">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta httpEquiv="content-type" content="text/html" />

          {/* SEO Meta Tags */}
          <meta name="author" content="Silas Henrique Alves Araújo" />
          <meta name="description" content="The Open source Service Order Manager" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content={`${SITE_URL}/card.png`} />
          <meta
            property="og:image:alt"
            content="The OpenSOM logo. A green desk bell, with OpenSOM written on the side"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={SITE_URL} />
          <meta name="twitter:creator" content="@silash35" />
          <meta name="twitter:image" content={`${SITE_URL}/card.png`} />

          {/* Icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#0070f3" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="OpenSOM" />
          <meta name="application-name" content="OpenSOM" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;