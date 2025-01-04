'use client'
const LoaderOverLay = () => {
    return (
      <>
        <div className="fixed top-0 left-0  right-0 z-[10000] flex h-full items-center justify-center bg-black bg-opacity-[.5]">
          <div className="absolute h-32 w-32 animate-spin rounded-full border-t-4 border-b-4 border-[#000]"></div>
          <img src="/images/electric.png" className=" h-24 w-24 rounded-full" />
        </div>
      </>
    );
  };
  export default LoaderOverLay;