import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiMailLine,
  RiContactsLine,
} from "react-icons/ri";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [contatoOpen, setContatoOpen] = useState(false);
  const [redesOpen, setRedesOpen] = useState(false);
  const [mapaOpen, setMapaOpen] = useState(false);

  return (
    <footer className="bg-[#141414] shadow">
      {/* Footer Celular e Tablet */}
      <div className="lg:hidden">
        {/* Footer Contatos */}
        <div>
          <button
            type="button"
            className="collapse-toggle flex justify-between items-center w-full h-[41px] border-y border-[#FFE500]  text-white font-bold text-center pl-2"
            aria-expanded={contatoOpen}
            onClick={() => setContatoOpen((open) => !open)}
          >
            Contatos
            <span
              className={`icon-[tabler--chevron-down] collapse-open:rotate-180 size-4 transition-transform text-white mr-4 ${
                contatoOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown className="w-5 h-5" />
            </span>
          </button>
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              contatoOpen ? "max-h-40" : "max-h-0"
            }`}
            style={{ maxHeight: contatoOpen ? "160px" : "0px" }}
          >
            <div className="bg-[#1E1F22] px-2 flex flex-col mt-1 mb-1">
              <p className="text-white font-semibold flex items-center">
                <RiMailLine className="h-6 w-6 mr-2 mb-1"> </RiMailLine> E-mail:
                contato@exemplo.com
              </p>
              <p className="text-white font-semibold flex items-center">
                <RiContactsLine className="h-6 w-6 mr-2"> </RiContactsLine>{" "}
                Contato: (61) 91234-5678
              </p>
            </div>
          </div>
        </div>
        {/* Footer Redes Sociais */}
        <div>
          <button
            type="button"
            className="collapse-toggle flex justify-between items-center w-full h-[41px] border-y border-[#FFE500] text-white font-bold text-start pl-2"
            aria-expanded={redesOpen}
            onClick={() => setRedesOpen((open) => !open)}
          >
            Redes Sociais
            <span
              className={`icon-[tabler--chevron-down] collapse-open:rotate-180 size-4 transition-transform text-white mr-4 ${
                redesOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown className="w-5 h-5" />
            </span>
          </button>
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              redesOpen ? "max-h-40" : "max-h-0"
            }`}
            style={{ maxHeight: redesOpen ? "160px" : "0px" }}
          >
            <div className="bg-[#1E1F22] pl-2 flex flex-col">
              <a
                className="text-white transition hover:text-[#FFE500] mt-1 mb-1 font-semibold"
                href="https://wa.me/556194042201"
                target="_blank"
                rel="noreferrer"
              >
                <RiWhatsappLine className="h-6 w-6 inline mr-1" /> WhatsApp
              </a>
              <a
                className="text-white transition hover:text-[#FFE500] mb-1 font-semibold"
                href="https://www.instagram.com/projeto_campeao/"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramLine className="h-6 w-6 inline mr-1" /> Instagram
              </a>
              <a
                className="text-white transition hover:text-[#FFE500] mb-1 font-semibold"
                href="https://www.facebook.com/pjcss/?ref=_xav_ig_profile_page_web#"
                target="_blank"
                rel="noreferrer"
              >
                <RiFacebookBoxLine className="h-6 w-6 inline mr-1" /> Facebook
              </a>
            </div>
          </div>
        </div>
        {/* Footer Mapa */}
        <div>
          <button
            type="button"
            className="collapse-toggle flex justify-between items-center w-full h-[41px] border-y border-[#FFE500] text-white font-bold text-start pl-2"
            aria-expanded={mapaOpen}
            onClick={() => setMapaOpen((open) => !open)}
          >
            Localização
            <span
              className={`icon-[tabler--chevron-down] collapse-open:rotate-180 size-4 transition-transform text-white mr-4 ${
                mapaOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown className="w-5 h-5" />
            </span>
          </button>
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              mapaOpen ? "max-h-40" : "max-h-0"
            }`}
            style={{ maxHeight: mapaOpen ? "500px" : "0px" }}
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-[16px] font-semibold text-center mt-2 mb-2">
                PRODF - Quadra 01, Conjunto 01, Lote 09 <br /> São Sebastião -
                DF
              </p>
              <div className="min-w-[380px] w-full max-w-[640px] h-64 mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.624822063276!2d-47.777188646714265!3d-15.909145480997529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a20317d2c9093%3A0x7c8ee623a751a46f!2sProjeto%20Social%20Campe%C3%A3o!5e0!3m2!1sen!2sbr!4v1756997265885!5m2!1sen!2sbr"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Computador */}
      <div className="px-0 pt-0 pb-5 hidden lg:flex lg:justify-around lg:items-center border-t-1 border-[#FFE500]">
        {/* Contatos e Redes Sociais */}
        <div className="flex justify-center items-center gap-15">
          {/* Footer Contatos */}
          <div className="flex flex-col justify-center items-start gap-3">
            <p className="text-white font-bold">-- Contatos --</p>
            <p className="text-white font-semibold flex items-center">
              <RiMailLine className="h-6 w-6 mr-2"> </RiMailLine>
              contato@exemplo.com
            </p>
            <p className="text-white font-semibold flex items-center">
              <RiContactsLine className="h-6 w-6 mr-2"> </RiContactsLine> (61)
              91234-5678
            </p>
          </div>
          {/* Footer Redes Sociais */}
          <div className="flex flex-col justify-center items-start gap-3">
            <a
              className="text-white transition hover:text-[#FFE500] font-semibold"
              href="https://wa.me/556194042201"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine className="h-6 w-6 inline" /> WhatsApp
            </a>
            <a
              className="text-white transition hover:text-[#FFE500] font-semibold"
              href="https://www.instagram.com/projeto_campeao/"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramLine className="h-6 w-6 inline" /> Instagram
            </a>
            <a
              className="text-white transition hover:text-[#FFE500] font-semibold"
              href="https://www.facebook.com/pjcss/?ref=_xav_ig_profile_page_web#"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookBoxLine className="h-6 w-6 inline" /> Facebook
            </a>
          </div>
        </div>

        {/* Footer Mapa */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-[16px] font-semibold text-center mt-5 mb-2">
            PRODF - Quadra 01, Conjunto 01, Lote 09 - São Sebastião - DF
          </p>
          <div className="w-[600px] h-50 mb-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.624822063276!2d-47.777188646714265!3d-15.909145480997529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a20317d2c9093%3A0x7c8ee623a751a46f!2sProjeto%20Social%20Campe%C3%A3o!5e0!3m2!1sen!2sbr!4v1756997265885!5m2!1sen!2sbr"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Footer direitos reservados */}
      <div
        className="text-center text-[14px] font-semibold text-white border-t border-[#FFE500] pt-5 pb-5
        sm:flex sm:justify-around sm:items-center sm:px-5"
      >
        <p className="sm:mt-1">
          Todos os direitos reservados
          <a
            href="https://www.instagram.com/projeto_campeao/"
            className="hover:text-[#FFE500]"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            ©PROJETO SOCIAL CAMPEÃO
          </a>
        </p>
        <p className="mt-1 ">
          {" "}
          Site desenvolvido por
          <a
            href="https://junior.dev.design"
            className="hover:text-[#FFE500]"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            @JuniorDevDesign
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
