import { Link } from "react-router-dom";
import LogoGrownesia from "../../LogoGrownesia";
import IconArrowRight from "../../icon/IconArrowRight";
import IconLove from "../../icon/IconLove";
import IconShopingCart from "../../icon/IconShopingCart";
import IconPeople from "../../icon/IconPeople";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IconCall from "@/components/icon/IconCall";
import IconMenuBar from "@/components/icon/IconMenuBar";
import { useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onHandleMenuBar = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* // tampilan dekstop */}
      <nav className="lg:block md:hidden hidden">
        <header className="px-12 py-3 items-center flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-[13px] leading-[13px] text-[#7E7E7E]">
              Tentang Kami
            </p>
            <div className="h-3 w-0.5 bg-[#DEDFE2]"></div>
            <p className="text-[13px] leading-[13px] text-[#7E7E7E]">
              Akun Saya
            </p>
            <div className="h-3 w-0.5 bg-[#DEDFE2]"></div>
            <p className="text-[13px] leading-[13px] text-[#7E7E7E]">
              Wishlist
            </p>
            <div className="h-3 w-0.5 bg-[#DEDFE2]"></div>
            <p className="text-[13px] leading-[13px] text-[#7E7E7E]">
              Lacak Pesanan
            </p>
          </div>
          <p className="text-[14px] font-bold leading-[10px] text-[#3BB77E]">
            Pengiriman cepat dan aman ke seluruh Indonesia
          </p>
          <p className="text-[13px] leading-[13px] text-[#7E7E7E]">
            Butuh bantuan? Hubungi kami:
            <span className="text-[#3EB489]">+62 812-3456-7890</span>
          </p>
        </header>
        <div className="h-[1px] w-full bg-[#DEDFE2]"></div>
        <div className="px-12 py-3 md:flex flex-row items-center justify-between">
          <div className="flex flex-row gap-5 items-center">
            <LogoGrownesia />
            <div className="relative">
              <input
                type="text"
                placeholder="Cari Produk di Grownesia..."
                className="rounded-[4px] p-3 w-[400px] border-2 focus:outline-none"
              />
              <button className="font-semibold absolute px-4 py-2 bg-[#3EB489] text-white rounded-[3px] right-2 top-1.5">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Link
              to={"/register-shop"}
              className="flex flex-row items-center gap-4 py-3 px-6 text-[#3BB77E] border border-[#ECECEC] leading-[26px] tracking-[0.5px] font-medium h-fit rounded-[5px] shadow-sm hover:text-white hover:bg-[#3BB77E] transition-all duration-300 ease-in-out group"
            >
              Buka Toko
              {/* <IconArrowRight /> */}
              <ArrowLongRightIcon className='w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out' />
            </Link>
            <Link className="flex flex-row items-center gap-1">
              <div className="relative">
                <div className="absolute left-3 bottom-4 rounded-full w-5 h-5 bg-[#3EB489] flex items-center justify-center text-white text-[12px] leading-[20px]">
                  0
                </div>
                <IconLove />
              </div>
              <p className="text-[16px] leading-[16px] text-[#7E7E7E]">
                Wishlist
              </p>
            </Link>
            <Link className="flex flex-row items-center gap-1">
              <div className="relative">
                <div className="absolute left-3 bottom-4 rounded-full w-5 h-5 bg-[#3EB489] flex items-center justify-center text-white text-[12px] leading-[20px]">
                  0
                </div>
                <IconShopingCart />
              </div>
              <p className="text-[16px] leading-[16px] text-[#7E7E7E]">
                Keranjang
              </p>
            </Link>
            <Link className="flex flex-row items-center gap-1">
              <IconPeople />
              <p className="text-[16px] text-[#7E7E7E]">Akun</p>
            </Link>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#DEDFE2]"></div>
        <div className="px-12 py-3 md:flex flex-row items-center justify-between">
          <Select>
            <SelectTrigger className="w-[200px] bg-[#3EB489] data-[placeholder]:text-white data-[placeholder]:font-medium text-white focus:ring-0">
              <SelectValue placeholder="Pilih Kategori Produk"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pilih Kategori Produk</SelectLabel>
                <SelectItem value="makanan">Makanan</SelectItem>
                <SelectItem value="minuman">Minuman</SelectItem>
                <SelectItem value="bodycare">Body Care</SelectItem>
                <SelectItem value="homecare">Home Care</SelectItem>
                <SelectItem value="perabotan">Perabotan</SelectItem>
                <SelectItem value="rokok">Rokok</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex flex-row gap-24 items-center">
            <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
              Beranda
            </Link>
            <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
              Produk
            </Link>
            <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
              Toko
            </Link>
            <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
              Pelatihan
            </Link>
            <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
              Blog
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <IconCall />
            <div className="flex flex-col gap-0 items-center justify-center">
              <p className="text-[#3BB77E] font-bold text-[26px]">1900 - 888</p>
              <p className="text-[#7E7E7E] text-[12px] tracking-[0.9px] font-medium">
                24/7 Support Center
              </p>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#DEDFE2]"></div>
      </nav>
      {/* // tampilan mobile dan tablet */}
      <nav className="lg:hidden md:block sm:block bg-white">
        <div className="flex flex-row justify-between items-center px-4 py-3">
          <LogoGrownesia />

          <button onClick={onHandleMenuBar}>
            <IconMenuBar />
          </button>
        </div>
        {open && (
          <div className="flex flex-col gap-2 py-5 px-4 items-center absolute bg-white w-full z-20">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8 items-center">
              <Link className="flex flex-row items-center gap-1">
                <div className="relative">
                  <div className="absolute left-3 bottom-4 rounded-full w-5 h-5 bg-[#3EB489] flex items-center justify-center text-white text-[12px] leading-[20px]">
                    0
                  </div>
                  <IconLove />
                </div>
                <p className="text-[16px] leading-[16px] text-[#7E7E7E]">
                  Wishlist
                </p>
              </Link>
              <Link className="flex flex-row items-center gap-1">
                <div className="relative">
                  <div className="absolute left-3 bottom-4 rounded-full w-5 h-5 bg-[#3EB489] flex items-center justify-center text-white text-[12px] leading-[20px]">
                    0
                  </div>
                  <IconShopingCart />
                </div>
                <p className="text-[16px] leading-[16px] text-[#7E7E7E]">
                  Keranjang
                </p>
              </Link>
              <Link className="flex flex-row items-center gap-1">
                <IconPeople />
                <p className="text-[16px] text-[#7E7E7E]">Akun</p>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 items-center mt-5">
              <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
                Beranda
              </Link>
              <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
                Produk
              </Link>
              <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
                Toko
              </Link>
              <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
                Pelatihan
              </Link>
              <Link className="font-bold text-[16px] text-[#253D4E] hover:text-[#3EB489] transition-all duration-300 ease-in-out">
                Blog
              </Link>
            </div>
            <div className="relative w-full mt-5">
              <input
                type="text"
                placeholder="Cari Produk di Grownesia..."
                className="rounded-[4px] p-3 w-full border-2 focus:outline-none"
              />
              <button className="font-semibold absolute px-4 py-2 bg-[#3EB489] text-white rounded-[3px] right-2 top-1.5">
                Search
              </button>
            </div>
            <Link
              to={"/register-shop"}
              className="flex flex-row items-center gap-4 py-3 px-6 text-[#3BB77E] border border-[#ECECEC] leading-[26px] tracking-[0.5px] h-fit w-full rounded-[5px] shadow-sm"
            >
              Buka Toko
              <IconArrowRight />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
