import CardProductComponent from "@/components/home/CardProductComponent";
import IconLove from "@/components/icon/IconLove";
import IconShopingCart from "@/components/icon/IconShopingCart";
import GuestLayout from "@/components/layout/GuestLayout";
import products from "@/lib/data";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function DetailProduct() {
  return (
    <GuestLayout>
      <section className="flex lg:flex-row md:flex-col flex-col lg:gap-24 md:gap-12 gap-5 lg:px-12 md:px-5 px-5 py-12">
        <div className="flex flex-col gap-5 lg:w-1/2 md:w-full w-full">
          <div className="w-full border-2 border-gray-200 flex items-center p-10 rounded-[20px]">
            <img
              src="./product/unsweetened_coconut_flakes.png"
              className="w-full h-auto"
              alt=""
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="w-full border-2 border-gray-200 flex items-center p-2 rounded-[20px] hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer">
              <img
                src="./product/unsweetened_coconut_flakes.png"
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full border-2 border-gray-200 flex items-center p-2 rounded-[20px] hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer">
              <img
                src="./product/unsweetened_coconut_flakes.png"
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full border-2 border-gray-200 flex items-center p-2 rounded-[20px] hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer">
              <img
                src="./product/unsweetened_coconut_flakes.png"
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="w-full border-2 border-gray-200 flex items-center p-2 rounded-[20px] hover:scale-105 transition-all duration-400 ease-in-out cursor-pointer">
              <img
                src="./product/unsweetened_coconut_flakes.png"
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full w-full ">
          <div className="flex items-center rounded-[5px] bg-[#FDE0E9] p-3 w-fit">
            <p className="text-[#F74B81] font-bold text-[14px]">Sale Off</p>
          </div>
          <p className="mt-2 font-bold text-[40px] text-[#253D4E]">
            Seeds of Change Organic Quinoa, Brown
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-[#FDC040]" />
              <StarIcon className="w-5 h-5 text-[#FDC040]" />
              <StarIcon className="w-5 h-5 text-[#FDC040]" />
              <StarIcon className="w-5 h-5 text-[#FDC040]" />
              <StarIcon className="w-5 h-5 text-[#B6B6B6]" />
            </div>
            <p className="font-semibold text-[14px] text-[#B6B6B6]">
              (32 Reviews)
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-5 md:items-center items-start md:mt-10 mt-5">
            <p className="text-[#3BB77E] text-[58px] font-bold">Rp. 38.000</p>
            <div className="flex flex-col">
              <p className="text-[12px] font-semibold text-[#FDC040]">
                26% Off
              </p>
              <p className="font-bold text-[28px] text-[#B6B6B6]">Rp. 50.000</p>
            </div>
          </div>
          <p className="text-[17px] text-[#7E7E7E]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>
          <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-5 items-center mt-5">
            <p className="text-[#7E7E7E] font-semibold text-[14px]">
              Size / Weight:
            </p>
            <button className="p-3 border-2 border-gray-200 rounded-[10px] text-[#7E7E7E]">
              10gr
            </button>
            <button className="p-3 bg-[#3BB77E] rounded-[10px] text-white">
              20gr
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-[10px] text-[#7E7E7E]">
              30gr
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-[10px] text-[#7E7E7E]">
              40gr
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-[10px] text-[#7E7E7E]">
              50gr
            </button>
          </div>
          <div className="flex md:flex-row flex-col gap-5 items-center mt-5">
            <input
              type="number"
              defaultValue={1}
              className="rounded-[10px] border-2 border-[#3BB77E] md:w-[90px] w-full h-[50px] p-5"
            />
            <Link className="rounded-[4px] bg-[#3BB77E] text-white py-2 px-3 flex flex-row gap-1 text-[14px] font-bold items-center justify-center transition-all duration-300 ease-in-out w-full">
              <IconShopingCart />
              Tambahkan ke Keranjang
            </Link>
            <button className="p-3 border-2 border-gray-200 rounded-[10px] text-[#7E7E7E] w-full">
              <HeartIcon className="text-[#333333] w-[24px] h-[24px]" />
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-[10px] text-[#7E7E7E] w-full">
              <ShareIcon className="text-[#333333] w-[24px] h-[24px]" />
            </button>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 md:mt-16 mt-5">
            <p className="text-[13px] text-[#7E7E7E]">
              Type: <span className="text-[#3BB77E]">Organic</span>
            </p>
            <p className="text-[13px] text-[#7E7E7E]">
              MFG: <span className="text-[#3BB77E]">Jun 4.2022</span>
            </p>
            <p className="text-[13px] text-[#7E7E7E]">
              LIFE: <span className="text-[#3BB77E]">70 days</span>
            </p>
            <p className="text-[13px] text-[#7E7E7E]">
              SKU: <span className="text-[#3BB77E]">FWM15VKT</span>
            </p>
            <p className="text-[13px] text-[#7E7E7E]">
              Tags:{" "}
              <span className="text-[#3BB77E]">Snack, Organic, Brown</span>
            </p>
            <p className="text-[13px] text-[#7E7E7E]">
              Stock: <span className="text-[#3BB77E]">8 Items In Stock</span>
            </p>
          </div>
        </div>
      </section>
      <section className="border-2 border-gray-200 rounded-[15px] lg:p-10 md:p-5 p-5 md:mx-12 mx-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 items-center">
          <button className="p-3 border-2 border-gray-200 rounded-[15px] font-bold text-[#3BB77E]">
            Description
          </button>
          <button className="p-3 border-2 border-gray-200 rounded-[15px] font-bold text-[#7E7E7E]">
            Additional Info
          </button>
          <button className="p-3 border-2 border-gray-200 rounded-[15px] font-bold text-[#7E7E7E]">
            Vendor
          </button>
          <button className="p-3 border-2 border-gray-200 rounded-[15px] font-bold text-[#7E7E7E]">
            Reviews (3)
          </button>
        </div>
        <p className="mt-5 text-[16px] text-[#7E7E7E]">
          Uninhibited carnally hired played in whimpered dear gorilla koala
          depending and much yikes off far quetzal goodness and from for
          grimaced goodness unaccountably and meadowlark near unblushingly
          crucial scallop tightly neurotic hungrily some and dear furiously this
          apart.
        </p>
        <p className="mt-2 text-[16px] text-[#7E7E7E]">
          Uninhibited carnally hired played in whimpered dear gorilla koala
          depending and much yikes off far quetzal goodness and from for
          grimaced goodness unaccountably and meadowlark near unblushingly
          crucial scallop tightly neurotic hungrily some and dear furiously this
          apart.
        </p>
        <div className="flex flex-row gap-24 mt-5">
          <ul className="list-disc gap-5">
            <li className="text-[14px] text-[#7E7E7E]">Type Of Packing</li>
            <li className="text-[14px] text-[#7E7E7E]">Color</li>
            <li className="text-[14px] text-[#7E7E7E]">Quantity Per Case</li>
            <li className="text-[14px] text-[#7E7E7E]">Ethyl Alcohol</li>
            <li className="text-[14px] text-[#7E7E7E]">Piece In One</li>
          </ul>
          <ul className="gap-5">
            <li className="text-[14px] text-[#7E7E7E]">Bottle</li>
            <li className="text-[14px] text-[#7E7E7E]">
              Green, Pink, Powder Blue, Purple
            </li>
            <li className="text-[14px] text-[#7E7E7E]">100ml</li>
            <li className="text-[14px] text-[#7E7E7E]">70%</li>
            <li className="text-[14px] text-[#7E7E7E]">Carton</li>
          </ul>
        </div>
        <div className="mt-5 h-0.5 w-full bg-gray-300"></div>
        <p className="mt-5 text-[16px] text-[#7E7E7E]">
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>
        <p className="text-[#253D4E] font-bold text-[24px] mt-5">
          Packaging & Delivery
        </p>
        <div className="mt-5 h-0.5 w-full bg-gray-300"></div>
        <p className="mt-5 text-[16px] text-[#7E7E7E]">
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>
        <p className="mt-2 text-[16px] text-[#7E7E7E]">
          Laconic overheard dear woodchuck wow this outrageously taut beaver hey
          hello far meadowlark imitatively egregiously hugged that yikes
          minimally unanimous pouted flirtatiously as beaver beheld above
          forward energetic across this jeepers beneficently cockily less a the
          raucously that magic upheld far so the this where crud then below
          after jeez enchanting drunkenly more much wow callously irrespective
          limpet.
        </p>
        <p className="text-[#253D4E] font-bold text-[24px] mt-5">
          Suggested Use
        </p>
        <div className="flex flex-col gap-5">
          <p className="mt-2 text-[16px] text-[#7E7E7E]">
            Refrigeration not necessary.
          </p>
          <p className="mt-2 text-[16px] text-[#7E7E7E]">Stir before serving</p>
        </div>
        <p className="text-[#253D4E] font-bold text-[24px] mt-5">
          Other Ingredients
        </p>
        <div className="flex flex-col gap-5">
          <p className="mt-2 text-[16px] text-[#7E7E7E]">
            Refrigeration not necessary.
          </p>
          <p className="mt-2 text-[16px] text-[#7E7E7E]">Stir before serving</p>
        </div>
        <p className="text-[#253D4E] font-bold text-[24px] mt-5">Warnings</p>
        <div className="flex flex-col gap-5">
          <p className="mt-2 text-[16px] text-[#7E7E7E]">
            Refrigeration not necessary.
          </p>
          <p className="mt-2 text-[16px] text-[#7E7E7E]">Stir before serving</p>
        </div>
      </section>
      <section className="px-12 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] font-bold leading-[30px] text-[#253D4E]">
            Produk Terkait
          </h1>
          <div className="flex items-start">
            <div className="h-1 w-1/5 bg-[#BCE3C9]"></div>
            <span className="h-0.5 w-full bg-[#ECECEC]"></span>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {products.slice(0, 4).map((product, index) => (
            <CardProductComponent
              key={index}
              title={product.title}
              imagePath={product.image}
              category={product.category}
              companyName={product.company}
              stok={product.stok}
              discount={product.discount}
              priceBeforeDiscount={product.price_before_discount}
              priceAfterDiscount={product.price_after_discount}
            />
          ))}
        </div>
      </section>
    </GuestLayout>
  );
}
