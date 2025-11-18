import { formatRupiah } from "@/lib/utils";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import IconShopingCart from "../icon/IconShopingCart";

export default function CardOfferProductComponent({ imagePath, title, companyName, priceAfterDiscount, priceBeforeDiscount }) {
  const countDownRenderer = ({ completed, days, hours, minutes, seconds }) => {
    if (!completed) {
      return (
        <div className="absolute flex flex-row gap-2 items-center top-24">
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{days}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Days
            </p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{hours}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Hours
            </p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{minutes}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Mins
            </p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center rounded-[4px]">
            <p className="text-[20px] font-bold text-[#3BB77E]">{seconds}</p>
            <p className="font-semibold text-[14px] leading-[20px] text-[#253D4E]">
              Secs
            </p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="relative flex justify-center items-start min-h-[400px]">
      <img src={imagePath} alt="" />
      <Countdown date={Date.now() + 50000000} renderer={countDownRenderer} />
      <div className="absolute flex flex-col justify-between gap-2 px-3 py-5 bg-white rounded-[10px] top-48 z-50 border border-gray-200">
        <p className="font-bold text-[#253D4E] text-[16px] leading-auto line-clamp-1">
          {title}
        </p>
        <div>
          <p className="text-[16px] leading-[26px] text-[#B6B6B6] font-lato">
            Oleh <span className="text-[#3BB77E]">{companyName}</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
              {formatRupiah(priceAfterDiscount)}
            </p>
            <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
              {priceBeforeDiscount}
            </p>
          </div>
          <Link className="rounded-[4px] bg-[#DEF9EC] text-[#3BB77E] py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center hover:bg-[#3BB77E] hover:text-[#DEF9EC] transition-all duration-300 ease-in-out">
            <IconShopingCart />
            Tambah
          </Link>
        </div>
      </div>
    </div>
  );
}
