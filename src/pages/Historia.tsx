import { RiCalendar2Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

const Historia = () => {
  return (
    <>
      {/* Seção Banner */}
      <section className="relative h-[183px] sm:h-[250px] lg:h-[331px] w-full flex justify-center items-center whitespace-nowrap border-b-4 border-[#FFE500]">
        <img
          src="img/logo/PSC-LeaoRosnando.svg"
          alt="ImgBanner1"
          className="hidden lg:block absolute left-0"
        />
        <div className="w-full h-[331px] flex flex-col justify-center items-center">
          <h1 className="text-[#FFE500] font-[SheepmanW03-Bold] text-[33px] leading-none sm:text-[55px] lg:text-[66px]">
            HISTORIA DO PROJETO
          </h1>
          <p className="text-[#F8FAFC] font-[SheepmanW03-Bold] text-[18px] sm:text-[30px] lg:text-[36px] leading-tight">
            EVENTOS EM ORDEM CRONOLÓGICA
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
      {/* Seção Conteúdo da História */}
      <section className="my-6 flex flex-col justify-center items-center gap-8">
        {/*Registro*/}
        <div
          className=" w-[346px] h-[305px] shadow-[0px_0px_10px_rgba(255,229,0,55)] rounded-[10px]
          sm:flex sm:w-[570px] sm:h-[290px]
          lg:w-[936px] lg:h-[354px] bg-[#141414]"
        >
          <img
            src="/img/historia/CampeonatoCentroOeste2025.png"
            alt=""
            className=" w-[346px] h-[192px] object-none rounded-[10px] sm:h-[290px] sm:w-[277px] lg:w-[456px] lg:h-[354px]"
          />
          <div className="flex flex-col gap-5 lg:gap-6 ml-3 lg:ml-5">
            <h4 className="mt-3 mb-0 text-[16px] font-[SegoeUi] text-white font-bold sm:text-[20px] lg:text-[24px]">
              Campeonato Centro-Oeste 2025
            </h4>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <RiCalendar2Line className="text-[#FFE500]" />
              </div>
              31 de Maio 2025
            </p>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold -mt-4 sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <GrLocation className="text-[#FFE500]" />
              </div>
              Ginásio Do Cruzeiro, Cruzeiro Novo, QD 811
            </p>
          </div>
        </div>
        {/*Registro*/}
        <div
          className=" w-[346px] h-[305px] shadow-[0px_0px_10px_rgba(255,229,0,55)] rounded-[10px]
          sm:flex sm:w-[570px] sm:h-[290px]
          lg:w-[936px] lg:h-[354px] bg-[#141414]"
        >
          <img
            src="/img/historia/CampeonatoCentroOeste2025.png"
            alt=""
            className=" w-[346px] h-[192px] object-none rounded-[10px] sm:h-[290px] sm:w-[277px] lg:w-[456px] lg:h-[354px]"
          />
          <div className="flex flex-col gap-5 lg:gap-6 ml-3 lg:ml-5">
            <h4 className="mt-3 mb-0 text-[16px] font-[SegoeUi] text-white font-bold sm:text-[20px] lg:text-[24px]">
              Campeonato Centro-Oeste 2025
            </h4>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <RiCalendar2Line className="text-[#FFE500]" />
              </div>
              31 de Maio 2025
            </p>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold -mt-4 sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <GrLocation className="text-[#FFE500]" />
              </div>
              Ginásio Do Cruzeiro, Cruzeiro Novo, QD 811
            </p>
          </div>
        </div>
        {/*Registro*/}
        <div
          className=" w-[346px] h-[305px] shadow-[0px_0px_10px_rgba(255,229,0,55)] rounded-[10px]
          sm:flex sm:w-[570px] sm:h-[290px]
          lg:w-[936px] lg:h-[354px] bg-[#141414]"
        >
          <img
            src="/img/historia/CampeonatoCentroOeste2025.png"
            alt=""
            className=" w-[346px] h-[192px] object-none rounded-[10px] sm:h-[290px] sm:w-[277px] lg:w-[456px] lg:h-[354px]"
          />
          <div className="flex flex-col gap-5 lg:gap-6 ml-3 lg:ml-5">
            <h4 className="mt-3 mb-0 text-[16px] font-[SegoeUi] text-white font-bold sm:text-[20px] lg:text-[24px]">
              Campeonato Centro-Oeste 2025
            </h4>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <RiCalendar2Line className="text-[#FFE500]" />
              </div>
              31 de Maio 2025
            </p>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold -mt-4 sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <GrLocation className="text-[#FFE500]" />
              </div>
              Ginásio Do Cruzeiro, Cruzeiro Novo, QD 811
            </p>
          </div>
        </div>
        {/*Registro*/}
        <div
          className=" w-[346px] h-[305px] shadow-[0px_0px_10px_rgba(255,229,0,55)] rounded-[10px]
          sm:flex sm:w-[570px] sm:h-[290px]
          lg:w-[936px] lg:h-[354px] bg-[#141414]"
        >
          <img
            src="/img/historia/CampeonatoCentroOeste2025.png"
            alt=""
            className=" w-[346px] h-[192px] object-none rounded-[10px] sm:h-[290px] sm:w-[277px] lg:w-[456px] lg:h-[354px]"
          />
          <div className="flex flex-col gap-5 lg:gap-6 ml-3 lg:ml-5">
            <h4 className="mt-3 mb-0 text-[16px] font-[SegoeUi] text-white font-bold sm:text-[20px] lg:text-[24px]">
              Campeonato Centro-Oeste 2025
            </h4>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <RiCalendar2Line className="text-[#FFE500]" />
              </div>
              31 de Maio 2025
            </p>
            <p className="flex justify-start items-center gap-2 text-[14px] font-[SegoeSymbol] text-[#B2B3B4] font-semibold -mt-4 sm:text-[15px] lg:text-[16px]">
              <div className="bg-[rgba(255,229,0,0.2)] rounded-full p-1">
                <GrLocation className="text-[#FFE500]" />
              </div>
              Ginásio Do Cruzeiro, Cruzeiro Novo, QD 811
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Historia;
