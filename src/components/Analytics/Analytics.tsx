import Script from "next/script";

export default function Analytics(params: { GAId: string; GTMsrc: string }) {
    /* Alternatively  */
  return (
    <>
      <Script async src={params.GTMsrc} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${params.GAId}');
            `}
      </Script>
    </>
  );
}
