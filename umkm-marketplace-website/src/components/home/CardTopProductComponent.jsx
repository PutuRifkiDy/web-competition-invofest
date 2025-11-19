import { formatRupiah } from "@/lib/utils";

export default function CardTopProductComponent({
  imagePath,
  title,
  stok,
  priceAfterDiscount,
  priceBeforeDiscount,
}) {

  return (
    <div className="flex lg:flex-row md:flex-col flex-col gap-5 items-center">
      <img
        src={imagePath}
        className="md:w-[112.5px] md:h-[112.5px] w-full h-auto"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[16px] leading-[19.2px] text-[#253D4E]">
          {title}
        </p>
        <p className="text-[12px] leading-[12px] text-[#D3CED2]">Stok {stok}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            <p className="font-bold text-[18px] leading-[26px] text-[#3BB77E] underline underline-offset-4">
              {formatRupiah(priceAfterDiscount)}
            </p>
            <p className="font-semibold text-[14px] leading-[26px] text-[#ADADAD] line-through">
              {priceBeforeDiscount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
