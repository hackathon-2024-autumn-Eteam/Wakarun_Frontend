import Image from 'next/image';

export default function Background() {
  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image src="/images/Background.png" alt="背景画像" layout="fill" />
      </div>
    </>
  );
}
