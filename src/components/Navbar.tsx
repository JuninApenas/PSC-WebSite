import { useState } from "react";
import DrawOutlineButton from "./ButtonEffect";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiCalendarLine,
} from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrDomain } from "react-icons/gr";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#141414] fixed top-0 left-0 w-full shadow z-50">
      {/** Barra de navegação */}
      <nav
        aria-label="Global"
        className="h-[80px] mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo da barra de navegação */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Projeto Social Campeão</span>
            <img
              src="img/logo/PSC-Nome-Cabeca.svg"
              alt=""
              className="h-[96px] w-auto"
            />
          </a>
        </div>
        {/* Botão de menu para Mobile */}
        <div className="flex lg:hidden border-1 text-[#FFE500]">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#FFE500]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Links da barra de navegação */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-xl/6 font-semibold text-[#FFE500]">
            <DrawOutlineButton className="">Principal</DrawOutlineButton>
          </a>
          <a href="Horarios" className="text-xl/6 font-semibold text-[#FFE500]">
            <DrawOutlineButton className="">Horarios</DrawOutlineButton>
          </a>
          <a href="Historia" className="text-xl/6 font-semibold text-[#FFE500]">
            <DrawOutlineButton className="">Historia</DrawOutlineButton>
          </a>
          <a
            href="Transparencia"
            className="text-xl/6 font-semibold text-[#FFE500]"
          >
            <DrawOutlineButton className="">Transparencia</DrawOutlineButton>
          </a>
        </div>
        {/* Icones da barra de navegação */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a href="https://wa.me/556194042201" target="_blank" rel="noreferrer">
            <DrawOutlineButton className="flex items-center justify-center">
              <RiWhatsappLine className="h-6 w-6 text-[#FFE500]" />
            </DrawOutlineButton>
          </a>
          <a
            href="https://www.instagram.com/projeto_campeao/"
            target="_blank"
            rel="noreferrer"
          >
            <DrawOutlineButton className="flex items-center justify-center">
              <RiInstagramLine className="h-6 w-6 text-[#FFE500]" />
            </DrawOutlineButton>
          </a>
          <a
            href="https://www.facebook.com/pjcss/?ref=_xav_ig_profile_page_web#"
            target="_blank"
            rel="noreferrer"
          >
            <DrawOutlineButton className="flex items-center justify-center">
              <RiFacebookCircleLine className="h-6 w-6 text-[#FFE500]" />
            </DrawOutlineButton>
          </a>
        </div>
      </nav>
      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <dialog
          id="mobile-menu"
          className="backdrop:bg-transparent lg:hidden"
          open
        >
          <div tabIndex={0} className="fixed inset-0 focus:outline-none">
            <div className="fixed inset-y-0 right-0 z-50 w-[290px] overflow-y-auto bg-[#141414] p-6 sm:max-w-[290px] sm:ring-1 sm:ring-gray-100/10">
              {/* Logo do Menu Mobile */}
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">PSC</span>
                  <img
                    src="img/logo/PSC-Cabeca.svg"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>
                {/* Botão de fechar o Menu Mobile */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[#FFE500]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* Links do Menu Mobile */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {/** Menu de Paginas no menu Mobile */}
                    <div className="-mx-3">
                      <p className="-mx-3 block px-3 py-1 text-base/7 font-bold text-[#FFE500] bg-white/5">
                        Menu Paginas
                      </p>
                      <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5"
                      >
                        Principal
                        <GrDomain className="h-5 w-4.5 inline ml-1" />
                      </a>
                      <a
                        href="Horarios"
                        className="-mx-3 block rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5"
                      >
                        Horarios
                        <FaRegClock className="h-5 w-4.5 inline ml-1" />
                      </a>
                      <a
                        href="Historia"
                        className="-mx-3 block rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5"
                      >
                        Historia
                        <RiCalendarLine className="h-5 w-5 inline ml-1" />
                      </a>
                      <a
                        href="Transparencia"
                        className="-mx-3 block rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5"
                      >
                        Transparencia
                        <IoDocumentsOutline className="h-5 w-5 inline ml-1" />
                      </a>
                    </div>
                    {/** Redes Sociais no menu Mobile */}
                    <div className="-mx-3 mt-10">
                      <p className="-mx-3 px-3 py-1 text-base/7 font-bold text-[#FFE500] bg-white/5">
                        Redes Sociais
                      </p>
                      <a
                        href="https://wa.me/556194042201"
                        target="_blank"
                        rel="noreferrer"
                        className="-mx-3 rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5 flex items-center"
                      >
                        WhatsApp
                        <RiWhatsappLine className="h-5 w-5 inline ml-1" />
                      </a>
                      <a
                        href="https://www.instagram.com/projeto_campeao/"
                        target="_blank"
                        rel="noreferrer"
                        className="-mx-3 rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5 flex items-center"
                      >
                        Instagram
                        <RiInstagramLine className="h-5 w-5 inline ml-1" />
                      </a>
                      <a
                        href="https://www.facebook.com/pjcss/?ref=_xav_ig_profile_page_web#"
                        target="_blank"
                        rel="noreferrer"
                        className="-mx-3 rounded-lg px-3 py-1 text-base/7 font-semibold text-[#FFE500] hover:bg-white/5 flex items-center"
                      >
                        Facebook
                        <RiFacebookCircleLine className="h-5 w-5 inline ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </header>
  );
};

export default Navbar;
