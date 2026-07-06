import "./globals.css";

export const metadata = {
  title: "Aleshinloye Olamilekan - Full Stack Engineer",
  description:
    "Full stack software engineer building React and Next.js interfaces, Django/FastAPI/NestJS APIs, payment systems, dashboards, AI/ML intelligence layers, and production web platforms."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
