import "./globals.css";

const basePath =
  process.env.GITHUB_ACTIONS === "true"
    ? "/AleshinloyeOlamilekan.github.io"
    : "";

export const metadata = {
  title: "Aleshinloye Olamilekan — Full Stack Engineer",
  description:
    "Full stack engineer in Ibadan, Nigeria. Selected work in marketplace payments, multi-tenant platforms, open-source developer tools, and applied AI.",
  icons: { icon: `${basePath}/icon.svg` },
  openGraph: {
    title: "Aleshinloye Olamilekan — Full Stack Engineer",
    description:
      "Thoughtful interfaces. Dependable systems. Explore my work in product engineering, backend systems, and applied AI.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
