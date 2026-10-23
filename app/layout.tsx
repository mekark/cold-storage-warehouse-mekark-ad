import type { Metadata } from "next";
import DeferredGoogleTagManager from "@/components/DeferredGoogleTagManager";
import { assetUrl } from "@/lib/assetPrefix";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

export const metadata: Metadata = {
  title: "Cold Storage Construction Company in India | Turnkey Cold Chain",
  description:
    "Leading cold storage construction contractor in India. We build turnkey refrigerated warehouses (-25°C to +15°C) with PUF/PIR panels, PEB & floor insulation.",
  icons: {
    icon: assetUrl("/Mekark%20Favicon-32x32px.png"),
    shortcut: assetUrl("/Mekark%20Favicon-32x32px.png"),
    apple: assetUrl("/Images/LogoMekark.webp"),
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
