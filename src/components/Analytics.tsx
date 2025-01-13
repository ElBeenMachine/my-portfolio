import { env } from "next-runtime-env";
import Script from "next/script";
import React from "react";

export default function GoogleAnalytics() {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${env("ANALYTICS_ID")}`}
			/>

			<Script id="" strategy="lazyOnload">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${env("ANALYTICS_ID")}', {
              page_path: window.location.pathname,
              });
          `}
			</Script>
		</>
	);
}
