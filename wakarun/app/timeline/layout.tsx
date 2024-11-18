import Header from '@/app/components/layout/header/header';

export default function timeline({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header />
        {children}
        <div className="h-16"></div>
      </div>
    </>
  );
}
