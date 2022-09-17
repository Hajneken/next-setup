import Head from "next/head";

export default function SEOHead(params: { title: String; content?: String }) {
  /* Change to be website specific */
  function AddJsonLD() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Hynek Zemanec",
        "url": "https://zemanec.me/",
        "image": "https://zemanec.me/hynek.jpeg",
        "sameAs": [
          "https://www.facebook.com/Hynek-Zemanec-Photography-812230788986747",
          "https://twitter.com/Hynas17",
          "https://www.instagram.com/hynekpics/",
          "https://www.linkedin.com/in/hynekzemanec/",
          "https://github.com/hajneken",
          "https://blog.zemanec.me/"
        ],
        "jobTitle": "Web Developer"  
        }`,
    };
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{params.title}</title>
      <meta
        name="description"
        content="Personal website and portfolio of web developer, data analyst, designer and occasional photographer Hynek Zemanec."
      />
      <meta name="author" content="Hynek Zemanec" />
      <meta name="copyright" content="Hynek Zemanec" />
      <meta name="robots" content="index, follow" />
      <meta name="rating" content="general" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Hynek Zemanec - Web Developer and Data Analyst"
      />
      <meta property="og:url" content="https://zemanec.me/" />
      <meta
        property="og:image"
        content="https://og-image.xyz/og/Hynek Zemanec/Web Development & Data Analysis/zemanec.me/https/atkinson/flawlessaffinity/{{h}}ffffff/data.png"
      />
      <meta
        property="og:description"
        content="Web Development and Data Analysis"
      />
      <meta property="profile:first_name" content="Hynek" />
      <meta property="profile:last_name" content="Zemanec" />

      {/* Generated */}
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href="favicon-196.png"
      />

      <link
        rel="mask-icon"
        href="/img/favicon/safari-pinned-tab.svg"
        color="#082250"
      />

      <meta
        name="msapplication-square70x70logo"
        content="mstile-icon-128.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-icon-270.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-icon-558.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="mstile-icon-558-270.png"
      />

      <link rel="apple-touch-icon" href="apple-icon-180.png" />

      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2048-2732.jpg"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2732-2048.jpg"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1668-2388.jpg"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2388-1668.jpg"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1536-2048.jpg"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2048-1536.jpg"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1668-2224.jpg"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2224-1668.jpg"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1620-2160.jpg"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2160-1620.jpg"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1290-2796.jpg"
        media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2796-1290.jpg"
        media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1179-2556.jpg"
        media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2556-1179.jpg"
        media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1284-2778.jpg"
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2778-1284.jpg"
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1170-2532.jpg"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2532-1170.jpg"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1125-2436.jpg"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2436-1125.jpg"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1242-2688.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2688-1242.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-828-1792.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1792-828.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1242-2208.jpg"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-2208-1242.jpg"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-750-1334.jpg"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1334-750.jpg"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-640-1136.jpg"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="apple-splash-1136-640.jpg"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />

      <meta name="theme-color" content="#082250" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={AddJsonLD()}
        key="product-jsonld"
      ></script>
    </Head>
  );
}
