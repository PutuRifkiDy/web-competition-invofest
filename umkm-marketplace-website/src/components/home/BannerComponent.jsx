import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function BannerComponent({
  discount,
  title,
  description,
  price,
  imagePath
}) {
  return (
    <div className="relative">
      <div className="absolute lg:left-24 md:left-8 left-4 lg:top-12 md:top-5 top-5 flex flex-row gap-2 items-center">
        <p className="font-medium lg:text-[12px] md:text-[10px] text-[10px] tracking-[1px] text-[#202435] uppercase">
          Penawaran Spesial
        </p>
        <div className="rounded-[40px] px-5 md:py-2 py-1 bg-gradient-to-r from-[#3EB489] to-[#FFFFFF] uppercase lg:text-[14px] md:text-[12px] text-[12px] tracking-[1px] font-semibold text-[#038E42]">
          -{discount} Diskon
        </div>
      </div>
      <div className="absolute lg:left-24 md:left-8 left-4 lg:top-24 md:top-14 top-14 md:w-[400px] w-[300px] flex flex-row items-center">
        <p className="font-bold lg:text-[48px] md:text-[40px]  text-[36px] -tracking-[0.7px] lg:leading-[57.6px] md:leading-auto leading-9 text-[#202435]">
          {title}
        </p>
      </div>
      <div className="absolute lg:left-24 md:left-8 left-4 lg:top-52 md:top-32 top-32 flex flex-row gap-5 items-center">
        <p className="lg:text-[16px] md:text-[14px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
          {description}
        </p>
      </div>
      <div className="absolute lg:left-24 md:left-8 left-4 lg:top-64 md:top-36 top-44 flex flex-row gap-5 items-center">
        <p className="md:text-[16px] text-[14px] -tracking-[0.1px] leading-[24px] text-[#202435]">
          Mulai dari{" "}
          <span className="font-semibold lg:text-[26px] md:text-[24px] text-[22px] leading-[54px] text-[#D51243]">
            {price}
          </span>
        </p>
      </div>
      <div className="absolute lg:left-24 md:left-8 left-4 lg:top-80 md:top-48 top-56 flex flex-row gap-5 items-center">
        <Link
          to={""}
          className="flex flex-row items-center gap-4 md:py-2 py-1 px-6 bg-[#35AFA0] text-white rounded-[30px] group md:text-[16px] text-[12px]"
        >
          Belanja Sekarang
          <ArrowLongRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        </Link>
      </div>
      <img
        src={imagePath}
        className="md:w-full md:h-auto h-[300px] md:object-contain object-cover"
        alt=""
      />
    </div>
  );
}
