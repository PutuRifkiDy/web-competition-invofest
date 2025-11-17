import IconLogo from "@/components/icon/IconLogo";
import LogoGrownesia from "@/components/LogoGrownesia";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* tampilan dekstop */}
      <footer className="bg-[#f7f7f7] md:px-5 lg:px-12 px-5 py-10 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 lg:gap-40 pb-10 z-10">
          <div className="flex flex-col gap-5">
            <LogoGrownesia />
            {/* end jagonya udang */}

            <p className="md:w-[290px] w-full text-gray-600">
              Platform yang membantu UMKM Indonesia tumbuh dan menjangkau pasar
              digital secara berkelanjutan.
            </p>

            <div className="flex flex-row justify-start items-start gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className='w-10 h-10 items-center flex justify-center rounded-full bg-[#3BB77E] hover:shadow-xl shadow-[#3BB77E] transition-all duration-300 ease-in-out'>
                <FaInstagram size={18} className="text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className='w-10 h-10 items-center flex justify-center rounded-full bg-[#3BB77E] hover:shadow-xl shadow-[#3BB77E] transition-all duration-300 ease-in-out'>
                <FaFacebookF size={18} className="text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className='w-10 h-10 items-center flex justify-center rounded-full bg-[#3BB77E] hover:shadow-xl shadow-[#3BB77E] transition-all duration-300 ease-in-out'>
                <FiTwitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold">Navigasi</p>
            <Link
              to="/"
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Beranda
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to=""
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Produk
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to=""
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Toko
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to=""
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Pelatihan
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Blog
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold">Informasi</p>
            <a href="#" className="text-gray-600">
              Tentang Kami
            </a>
            <a href="#" className="text-gray-600">
              Syarat dan Ketentuan
            </a>
            <a href="#" className="text-gray-600">
              Kebijakan Privasi
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold">Bantuan</p>
            <a href="#" className="text-gray-600">
              Pusat Bantuan
            </a>
            <a href="#" className="text-gray-600">
              FAQ
            </a>
            <a href="#" className="text-gray-600">
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="w-full bg-gray-300 h-[2px]"></div>

        <div className="flex flex-row items-center justify-between pt-5">
          <p className="text-gray-600">Copyright &copy; 2025 Grownesia</p>
          <p className="text-gray-600">Platform UMKM Indonesia</p>
        </div>
      </footer>
    </>
  );
}
