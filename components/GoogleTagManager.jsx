import Script from "next/script";
import React from "react";
import { Helmet } from "react-helmet";

const GoogleTagManager = () => (
  <Helmet>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-8KV97CPKK0"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8KV97CPKK0');
      `}
    </Script>
  </Helmet>
);

export default GoogleTagManager;
