import dynamic from 'next/dynamic';
import Script from 'next/script';

const ReactLive2d = dynamic<any>(() => import('react-live2d'), { ssr: false });

export default function Live2D({ children }: { children: React.ReactNode }) {
  const touchStrings = ['What are you doing?', 'Humph'];
  return (
    <>
      <Script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js" />

      {children}

      <ReactLive2d
        width={300}
        height={500}
        right="20px"
        bottom="-30px"
        ModelList={['rice_pro_t03']}
        TouchBody={touchStrings}
        TouchHead={touchStrings}
        TouchDefault={touchStrings}
        PathFull="/live2d/"
        menuList={[]}
      />

      <style jsx global>{`
        #live2d-print {
          @apply bg-opacity-50 bg-gray-900 text-gray-100 top-16 right-0 left-auto !important;
        }
      `}</style>
    </>
  );
}
