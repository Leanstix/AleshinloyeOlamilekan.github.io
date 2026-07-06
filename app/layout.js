import "./globals.css";

export const metadata = {
  title: "Aleshinloye Olamilekan - Backend Engineer",
  description:
    "Backend-focused software engineer building APIs, payment systems, search infrastructure, AI/ML intelligence layers, and production web platforms."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
