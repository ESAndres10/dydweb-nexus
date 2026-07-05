import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Administrador",
  description: "Portal interno para administrar contenidos de DYDWEB Nexus.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
