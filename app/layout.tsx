

import '@/app/ui/global.css'
import { jetbrains, inter, gitlabSans } from "@/app/ui/fonts";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gitlabSans.className} antialiased`}>{children}</body>
    </html>
  );
}
