import '@/app/styles/global.css';
import Background from '@/app/components/layout/Background';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Wakarun</title>
        </head>
        <body>
          <Background />
          {children}
        </body>
      </html>
    </>
  );
}
