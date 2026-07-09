import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOP Portfolio — Meridian Medical CorePLM",
  description: "Technical writing portfolio: SOPs for a PLM migration, rendered with Markdoc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <div className="mx-auto flex max-w-6xl">
          <Sidebar />
          <main className="min-w-0 flex-1 px-8 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
