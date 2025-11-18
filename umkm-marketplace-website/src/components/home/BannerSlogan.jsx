import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function BannerSlogan() {
  return (
    <>
      {/* start card */}
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-12 px-5 mt-10 gap-5">
        {/* card 1 */}
        <div className="flex md:flex-row flex-col-reverse bg-[#FEEFEA] items-center md:px-10 px-5 md:py-5 py-10 rounded-[10px] overflow-hidden">
          <div className="flex flex-col gap-5">
            <p className="text-[#253D4E] font-bold lg:text-[18px] md:text-[14px] sm:text-[12px] lg:leading-[28.8px] md:leading-auto md:text-start text-center">
              Selalu Segar & Bersih Setiap Hari dengan Produk Kami
            </p>
            <Link className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 sm:px-1 flex flex-row items-center group text-white text-[12px] font-bold md:w-fit w-full md:justify-start justify-center">
              Belanja Sekarang
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
          <img
            src="/product/onion.png"
            className="lg:w-36 md:w-32 sm:w-32 lg:h-36 md:h-32 sm:h-32"
            alt=""
          />
        </div>
        {/* card 2 */}
        <div className="flex md:flex-row flex-col-reverse bg-[#ECFFEC] items-center md:px-10 px-5 md:py-5 py-10 rounded-[10px] overflow-hidden">
          <div className="flex flex-col gap-5">
            <p className="text-[#253D4E] font-bold lg:text-[18px] md:text-[14px] sm:text-[12px] lg:leading-[28.8px] md:leading-auto md:text-start text-center">
              Buat Sarapan Anda Lebih Sehat dan Praktis
            </p>
            <Link className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 sm:px-1 flex flex-row items-center group text-white text-[12px] font-bold md:w-fit w-full md:justify-start justify-center">
              Belanja Sekarang
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
          <img
            src="/product/coffe_version_1.png"
            className="lg:w-36 md:w-32 sm:w-32 lg:h-36 md:h-32 sm:h-32"
            alt=""
          />
        </div>
        {/* card 3 */}
        <div className="flex md:flex-row flex-col-reverse bg-[#ECFFEC] items-center md:px-10 px-5 md:py-5 py-10 rounded-[10px] overflow-hidden">
          <div className="flex flex-col gap-5">
            <p className="text-[#253D4E] font-bold lg:text-[18px] md:text-[14px] sm:text-[12px] lg:leading-[28.8px] md:leading-auto md:text-start text-center">
              Buat Sarapan Anda Lebih Sehat dan Praktis
            </p>
            <Link className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 sm:px-1 flex flex-row items-center group text-white text-[12px] font-bold md:w-fit w-full md:justify-start justify-center">
              Belanja Sekarang
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
          <img
            src="/product/mighty_muffin.png"
            className="lg:w-36 md:w-32 sm:w-32 lg:h-36 md:h-32 sm:h-32"
            alt=""
          />
        </div>
      </section>
      {/* end card */}
    </>
  );
}
