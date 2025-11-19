import { formatRupiah } from "@/lib/utils";
import { Link } from "react-router-dom";
import IconShopingCart from "../icon/IconShopingCart";

export default function CardProductComponent({
  discount,
  imagePath,
  category,
  title,
  stok,
  companyName,
  priceAfterDiscount,
  priceBeforeDiscount,
}) {
  const getDiscountColor = (discount) => {
    let backgroundColor;
    if (discount >= 10) {
      backgroundColor = "bg-[#3BB77E]";
    } else if (discount >= 5 && discount < 10) {
      backgroundColor = "bg-[#BC911A]";
    } else if (discount < 5) {
      backgroundColor = "bg-[#DD3333]";
    }

    return backgroundColor;
  };
  return (
    <Link to={"/detail-product"} className="relative flex flex-col border-[1px] border-[#ECECEC] rounded-[15px] overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <div
        className={`absolute left-0 top-0 ${getDiscountColor(
          discount
        )} rounded-br-[20px] flex items-center py-1.5 px-6`}
      >
        <p className="text-white font-[12px] font-lato">{discount}%</p>
      </div>
      <div className="flex flex-col justify-between h-full gap-2 px-5 py-5">
        <img src={imagePath} alt="" />
        <header className="flex flex-col">
          <p className="text-[#ADADAD] text-[12px] font-lato">{category}</p>
          <p className="font-bold text-[#253D4E] text-[16px] leading-[19.2px] line-clamp-1">
            {title}
          </p>
        </header>
        <div>
          <p className="text-[#253D4E]/80 text-[15px] font-semibold">
            Stok {stok}
          </p>
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
    </Link>
  );
}
