import React from "react";
import Head from "next/head";
import { GA_TRACKING_ID } from "./gtag";
import Script from "next/script";

const Layout = ({
    pageTitle = "NEAR PROJECTS",
    description = "Decentralized ecosystem aggregation about NEAR on NEAR",
    img = "/assets/logo.png",
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="description" content={description} />
        <meta itemProp="image" content={img} />
        <meta property="og:locale" content="en_US" />
        {/* <meta property="og:url" content="" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/*<meta name="apple-mobile-web-app-title" content="" />*/}
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_TRACKING_ID}');
  `}
      </Script>
    </>
  );
};

export default Layout;
