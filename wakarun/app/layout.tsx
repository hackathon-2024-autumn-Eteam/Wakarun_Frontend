import '@/app/styles/global.css';
import Background from '@/app/components/layout/Background';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'wakarun',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="ja">
        <body>
          <Background />
          {children}
        </body>
      </html>
    </>
  );
}
