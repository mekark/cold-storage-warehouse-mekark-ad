import type { Metadata } from "next";
import DeferredGoogleTagManager from "@/components/DeferredGoogleTagManager";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

export const metadata: Metadata = {
  title: "Turnkey Cold Storage construction Company – Cold Storage construction contractor",
  description:
    "Leading Turnkey Cold storage Warehouse construction EPC & Turnkey Cold chain warehouse construction Company – Cold Storage construction Turnkey EPC expertise in In House PEB Manufacturing, Civil, PEB, MEP and Seamless Execution servicing the needs of Turnkey cold storage building contractor & Turnkey cold storage warehouse construction , cold chain warehouse construction, refrigerated warehouse construction Company",
  icons: {
    icon: "/Mekark%20Favicon-32x32px.png",
    shortcut: "/Mekark%20Favicon-32x32px.png",
    apple: "/Images/LogoMekark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* Sets --cw before first paint so scaled desktop sections never flash zoomed-in */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;function u(){d.style.setProperty('--cw',d.clientWidth)}u();addEventListener('resize',u)})();`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <ScrollToTopButton />
        <DeferredGoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
