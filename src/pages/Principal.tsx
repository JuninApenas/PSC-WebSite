import React, { useState } from "react";

const Principal = () => {
  // Estados para cada checkbox
  const [checkedDefault, setCheckedDefault] = useState(false);

  return (
    <>
      {/* Seção Banner */}
      <section className="relative h-[183px] sm:h-[250px] lg:h-[331px] w-full flex justify-center items-center border-b-4 border-[#FFE500] text">
        <img
          src="img/logo/PSC-LeaoRosnando.svg"
          alt="ImgBanner1"
          className="hidden lg:block absolute left-0"
        />
        <div className="w-full h-[331px] flex flex-col justify-center items-center">
          <h1 className="text-[#FFE500] font-[SheepmanW03-Bold] text-[38px] sm:text-[55px] lg:text-[66px] leading-none">
            PROJETO SOCIAL CAMPEÃO
          </h1>
          <p className="text-[#F8FAFC] font-[SheepmanW03-Bold] text-[24px] sm:text-[30px] lg:text-[36px] leading-tight">
            NO ESPORTE E NA VIDA
          </p>
          <div className="flex gap-22 h-[20px] mt-10 sm:h-[30px] sm:mt-15 lg:h-[40px] lg:mt-20">
            <img
              src="img/logo/SEL-Cortado.png"
              alt="Logo MDE"
              className="object-contain"
            />
            <img
              src="img/logo/MDE-Cortado.png"
              alt="Logo SEL"
              className="object-contain"
            />
          </div>
        </div>
        <img
          src="img/logo/PSC-LeaoRosnando2.svg"
          alt="ImgBanner2"
          className="hidden lg:block absolute right-0"
        />
      </section>
      {/* Seção Comunicado */}
      <section className="relative w-full h-[500px] sm:h-[550px] lg:h-[704px] flex justify-center items-center bg-[#F8FAFC]">
        <div
          className="
        bg-[url('/img/kimono.png')] bg-no-repeat bg-center bg-cover absolute top-23 w-[215px] h-[333px]
        sm:w-[340px] sm:h-[520px] sm:top-6 sm:left-1/2 sm:-ml-[25px]
        lg:w-[457px] lg:h-[704px] lg:top-2 lg:left-1/2 lg:ml-[25px]"
        ></div>
        <div className="flex flex-col justify-center items-center relative z-10 sm:right-32 lg:right-55">
          {/* Comunicado e Patch */}
          <div className="sm:-mt-0">
            <h1 className="text-black text-[40px] sm:text-[45px] lg:text-[75px] font-[NeueHaas] bg-[#FFE500] px-2 lg:py-3 leading-[50px] inline-block rounded-[40px]">
              COMUNICADO
            </h1>
            <div className="flex items-center justify-center -mt-[2px]">
              <img
                src="/img/icons/SVG-DoubleArrow.svg"
                alt="Ícone"
                className="h-10 w-10"
              />
              <span className="text-black text-[20px] sm:text-[23px] lg:text-[35px] font-[NeueHaas] mr-2">
                PATCH OBRIGATORIO
              </span>
            </div>
          </div>

          {/* Aviso sobre Kimono */}
          <div className="mt-26 sm:mt-12 lg:mt-20 text-center bg-[rgba(30,31,34,0.8)] rounded-[40px] px-8 py-2 flex flex-col justify-center items-center">
            <p className="text-white text-[15px] sm:text-[16px] lg:text-[19px] font-[NeueHaas] max-w-[290px] lg:max-w-[450px]">
              “ATENÇÃO: O PATCH É OBRIGATÓRIO TANTO NA FRENTE QUANTO NAS COSTAS
              DO KIMONO, POR FAVOR, AJUSTEM SEUS KIMONOS PARA GARANTIR A
              CONFORMIDADE COM O PROJETO.”
            </p>
            <p className="text-white text-[11px] sm:text-[14px] lg:text-[16px] font-[NeueHaas] mt-4 max-w-[190px] lg:max-w-[300px]">
              “O PATCH REPRESENTA NOSSO COMPROMISSO E IDENTIDADE COMO EQUIPE,
              SIMBOLIZANDO UNIÃO E PERTENCIMENTO.”
            </p>
          </div>

          {/* Botão de Adquirir Patch */}
          <a
            href="https://wa.me/556194042201"
            className="mt-2 mb-3 shadow-[0px_5px_5px_rgba(255,229,0,55),0px_10px_10px_rgba(0,0,0,0.75)]
            flex items-center justify-center bg-[#FFE500] rounded-[15px] px-5 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src="/img/icons/SVG-WhatsAppPreto.svg"
              alt="Ícone"
              className="h-10 w-10"
            />
            <span className="text-black text-[16px] font-[NeueHaas]">
              ADQUIRIR PATCH
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Principal;
