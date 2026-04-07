import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";
import "swiper/css";

export const metadata: Metadata = {
  title: "PPA - Master Focus & Get More Done",
  description:
    "A practical deep work training landing page built with Next.js, TypeScript, and Tailwind CSS.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070B",
};

const themeScript = `
(() => {
  try {
    const saved = localStorage.getItem("ppa-theme");
    const theme = saved === "light" ? "light" : "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  } catch {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-neutral-950 text-white antialiased transition-colors duration-300 light:bg-neutral-25 light:text-neutral-950">
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-center"
            toastOptions={{
              className:
                "border border-white/10 bg-neutral-900 text-white light:bg-white light:text-neutral-950",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
