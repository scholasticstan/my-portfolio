export const metadata = {
  title: "Stanley's Portfolio",
  description: "Frontend Developer | JavaScript | React | Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
