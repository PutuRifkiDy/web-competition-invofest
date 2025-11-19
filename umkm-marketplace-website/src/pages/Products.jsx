import CardProductComponent from "@/components/home/CardProductComponent";
import CardTopProductComponent from "@/components/home/CardTopProductComponent";
import GuestLayout from "@/components/layout/GuestLayout";
import products from "@/lib/data";
import { useState } from "react";

export default function Products() {
  const [limitProduct, setLimitProduct] = useState(8);
  // handle show limit product
  const showMoreProduct = () => {
    setLimitProduct((prev) => prev + 4);
  };
  const showLessProduct = () => {
    setLimitProduct(8);
  };
  return (
    <GuestLayout>
      <div className="relative py-5">
        <img
          src="./banner/banner-9.png"
          className="w-full h-auto px-12"
          alt=""
        />
        <h1 className="absolute font-bold lg:text-[36px] md:text-[24px] text-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#253D4E]">
          Makanan & Minuman
        </h1>
      </div>
      <section className="flex md:flex-row flex-col-reverse lg:px-12 md:px-5 px-5 py-5 gap-5">
        <div className="flex flex-col lg:w-[75%] md:w-[65%] w-full">
          <p className="text-[16px] leading-[24px]">
            Kami menemukan{" "}
            <span className="font-semibold text-[#3BB77E]">29</span> item untuk
            anda
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5">
            {products.slice(0, limitProduct).map((product, index) => (
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
          {limitProduct < products.length && (
            <div className="flex flex-row justify-center items-center w-full mt-5">
              <button
                className="bg-[#3BB77E] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 px-3 flex flex-row items-center group text-white text-[12px] font-bold md:justify-start justify-center"
                onClick={() => showMoreProduct()}
              >
                Tampilkan Lebih Banyak
              </button>
            </div>
          )}
          {limitProduct == products.length && (
            <div className="flex flex-row justify-center items-center w-full mt-5">
              <button
                className="bg-[#1774B2] rounded-[4px] gap-3 py-2 lg:px-5 md:px-3 px-3 flex flex-row items-center group text-white text-[12px] font-bold md:justify-start justify-center"
                onClick={() => showLessProduct()}
              >
                Tampilkan Lebih Sedikit
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5 lg:w-[25%] md:w-[35%] w-full">
          <div className="border-[0.1em] border-gray-200 shadow p-5 rounded-[15px]">
            <p className="font-bold text-[24px] leading-[24px] text-[#253D4E] mb-4">
              Kategori
            </p>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/cafe_altura.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Fashion & Aksesoris
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img src="./product/pepsi.png" className="w-16 h-16" alt="" />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Makanan & Minuman
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/yuja_niacin.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Baby Care
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/veggie_pops_broccoli_chedda.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Home Care
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/yuja_niacin.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Skin Care
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/cafe_altura.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Toys
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/cafe_altura.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Decoration
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
              <div className="flex flex-row justify-between p-5 items-center border-[0.1em] border-gray-200 rounded-[10px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="./product/veggie_pops_broccoli_chedda.png"
                    className="w-16 h-16"
                    alt=""
                  />
                  <p className="text-[14px] leading-[18px] text-[#253D4E]">
                    Digital Technology
                  </p>
                </div>
                <div className="bg-[#BCE3C9] flex items-center justify-center rounded-full w-10 h-10">
                  4
                </div>
              </div>
            </div>
          </div>

          <div className="border-[0.1em] border-gray-200 shadow p-5 rounded-[15px]">
            <p className="font-bold text-[24px] leading-[24px] text-[#253D4E] mb-4">
              Filter Harga
            </p>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-start mt-2">
                <div className="h-2 w-1/2 bg-[#3BB77E] rounded-l-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#3BB77E]"></div>
                </div>
                <span className="h-2 w-full bg-[#D6D7D9] rounded-r-full"></span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#7E7E7E] text-[14px] font-semibold">
                  From: <span className="text-[#3BB77E]">Rp. 20.000</span>
                </p>
                <p className="text-[#7E7E7E] text-[14px] font-semibold">
                  To: <span className="text-[#3BB77E]">Rp. 34.000</span>
                </p>
              </div>
              <div className="flex flex-col mt-5 gap-2">
                <p className="text-[#7E7E7E] font-bold">Color</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="border-2 border-gray-600"
                    />
                    <p className="text-[#687188] font-semibold">Red (56)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="border-2 border-gray-600"
                    />
                    <p className="text-[#687188] font-semibold">Green (56)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="border-2 border-gray-600"
                    />
                    <p className="text-[#687188] font-semibold">Blue (56)</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-5 gap-2">
                <p className="text-[#7E7E7E] font-bold">Item Condition</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="border-2 border-gray-600"
                    />
                    <p className="text-[#687188] font-semibold">Baru (56)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="border-2 border-gray-600"
                    />
                    <p className="text-[#687188] font-semibold">Dipakai (56)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="border-2 border-gray-600"
                    />
                    <p className="text-[#687188] font-semibold">
                      Diperbarui (56)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-[0.1em] border-gray-200 shadow p-5 rounded-[15px]">
            <p className="font-bold text-[24px] leading-[24px] text-[#253D4E] mb-4">
              Produk Baru
            </p>
            <div className="flex items-start">
              <div className="h-1 w-1/2 bg-[#BCE3C9]"></div>
              <span className="h-0.5 w-full bg-[#ECECEC]"></span>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <CardTopProductComponent   imagePath="./product/yuja_niacin.png" title="Chen Sweater" stok="12" priceAfterDiscount="12000" priceBeforeDiscount="15.000" />
              <CardTopProductComponent   imagePath="./product/asian_sesame_edamame.png" title="Chen Sweater" stok="12" priceAfterDiscount="12000" priceBeforeDiscount="15.000" />
              <CardTopProductComponent   imagePath="./product/mighty_muffin.png" title="Chen Sweater" stok="12" priceAfterDiscount="12000" priceBeforeDiscount="15.000" />
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
