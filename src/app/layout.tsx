// app/layout.tsx

// globals.css includes @tailwind directives
// adjust the path if necessary
import "./globals.css";
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className=''>
      <title>ApanaLearn</title>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}