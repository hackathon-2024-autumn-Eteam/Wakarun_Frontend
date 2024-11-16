import Header from '@/app/components/layout/header/header';

export default function TimeLineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body>
        <Header />
        {children}
      </body>
    </>
  );
}
