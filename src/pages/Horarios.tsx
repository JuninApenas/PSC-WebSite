import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Horarios = () => {
  return (
    <>
      {/* Seção Banner */}
      <section className="relative h-[183px] sm:h-[250px] lg:h-[341px] w-full flex justify-center items-center whitespace-nowrap border-b-4 border-[#FFE500]">
        <img
          src="img/logo/PSC-LeaoRosnando.svg"
          alt="ImgBanner1"
          className="hidden lg:block absolute left-0"
        />
        <div className="w-full h-[331px] flex flex-col justify-center items-center">
          <h1 className="text-[#FFE500] font-[SheepmanW03-Bold] text-[33px] leading-none sm:text-[55px]  lg:text-[66px]">
            TREINOS
          </h1>
          <p className="text-[#F8FAFC] font-[SheepmanW03-Bold] text-[18px] sm:text-[30px] lg:text-[36px] leading-tight text-center">
            MODALIDADES, ENDEREÇOS E HORÁRIOS
          </p>
          <div className="flex gap-22 h-[20px] mt-8 sm:h-[30px] sm:mt-12 lg:h-[40px] lg:mt-18">
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
      <section className="flex flex-col items-center my-10 gap-10">
        {/* PSC - Sede */}
        <div
          className="flex flex-col w-[350px] bg-[#141414] rounded-[10px] shadow-[0px_0px_10px_rgba(255,229,0,55)] p-3 gap-10
         sm:w-[550px]
         lg:w-[1000px]"
        >
          {/* Local e Localização */}
          <div className="flex flex-col justify-center items-center lg:mb-4">
            <h2 className="text-[#FFE500] font-semibold text-[24px] flex justify-center items-center gap-2 sm:text-[36px]">
              <GrLocation /> Projeto Social Campeão
            </h2>
            <h3 className="text-white text-center leading-tight mb-3 sm:text-[20px] ">
              PRODF, Quadra 01, Conjunto 01, Lote 09 <br /> São Sebastião, DF
            </h3>
          </div>

          {/* JiuJitsu Adulto Misto e JiuJitsu 07 a 17 Anos */}
          <div className="sm:w-[550px] lg:flex lg:w-[1000px]">
            {" "}
            {/* PSC - JiuJitsu Adulto Misto */}
            <div className="text-white sm:w-1/2 mb-10">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Jiu Jitsu - Adulto Misto
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col ">
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Segunda
                    </div>
                    <div className="flex items-center mx-2 w-54 justify-end font-semibold pr-1 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 10:00
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 20:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Terça
                    </div>
                    <div className="flex items-center mx-2 w-54 justify-end font-semibold pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 10:30
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 21:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quarta
                    </div>
                    <div className="flex items-center mx-2 w-54 justify-end font-semibold pr-1 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 10:00
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 20:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quinta
                    </div>
                    <div className="flex items-center mx-2 w-54 justify-end font-semibold pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 10:30
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 21:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sexta
                    </div>
                    <div className="flex items-center mx-2 w-54 justify-end font-semibold pr-1 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 10:00
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 20:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sabado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PSC - JiuJitsu 07  a 17 Anos */}
            <div className="text-white sm:w-1/2">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Jiu Jitsu - 07 a 17 Anos
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col">
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Segunda
                    </div>
                    <div className="flex items-center mx-2 w-54 justify-end font-semibold pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 17:00
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Terça
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 15:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quarta
                    </div>
                    <div className="flex items-center mx-2 w-54 sm:w-75 justify-end font-semibold pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 14:30
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 17:00
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quinta
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1 " /> 15:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sexta
                    </div>
                    <div className="flex items-center w-54 sm:w-75 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 14:30
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 17:00
                      <FaRegClock className="mr-1 ml-5 sm:ml-10" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sabado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JiuJitsu Feminino e Judo */}
          <div className="sm:w-[550px] lg:flex lg:w-[1000px]">
            {/* PSC - JiuJitsu Feminino */}
            <div className="text-white sm:w-1/2 mb-10">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Jiu Jitsu - Feminino
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col">
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Segunda
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Terça
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 08:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quarta
                    </div>
                    <div className="flex items-center mx-2 w-35 font-semibold"></div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quinta
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 08:30
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sexta
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sabado
                    </div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 09:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PSC - Judo - 07 a 17 Anos */}
            <div className="text-white sm:w-1/2">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Judo - 07 a 17 Anos
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col ">
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Segunda
                    </div>
                    <div className="flex items-center mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Terça
                    </div>
                    <div className="flex items-center mx-2 gap-0.5 font-semibold pr-[4px] sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quarta
                    </div>
                    <div className="flex items-center mx-2  gap-0.5 font-semibold pr-[1px] sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 08:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Quinta
                    </div>
                    <div className="flex items-center justify-start mx-2 gap-0.5 font-semibold pr-[4px] sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sexta
                    </div>
                    <div className="flex items-center text-center mx-2 gap-0.5 font-semibold pr-[1px] sm:text-[20px]">
                      <FaRegClock className="mr-1" /> 08:00
                    </div>
                  </div>
                  <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold sm:text-[20px]">
                      Sabado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PSC - Muay Thais - Adulto Misto */}
          <div className="text-white sm:flex justify-center lg:w-[1000px] mb-5">
            {/* Modalidade, Datas e Horarios */}
            <div className="border-[#FFE500] border-l-2 pl-2">
              {/* Modalidade */}
              <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                Muay Thai - Adulto Misto
              </h2>
              {/* Data e Horarios */}
              <div className="gap-1.5 flex flex-col">
                <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold sm:text-[20px]">
                    Segunda
                  </div>
                  <div className="flex items-center w-35 mx-2 font-semibold"></div>
                </div>
                <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold sm:text-[20px]">Terça</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                    <FaRegClock className="mr-1" /> 17:45
                  </div>
                </div>
                <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold sm:text-[20px]">
                    Quarta
                  </div>
                  <div className="flex items-center mx-2 w-35 font-semibold"></div>
                </div>
                <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold sm:text-[20px]">
                    Quinta
                  </div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                    <FaRegClock className="mr-1" /> 17:45
                  </div>
                </div>
                <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold sm:text-[20px]">Sexta</div>
                </div>
                <div className="flex items-center w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold sm:text-[20px]">
                    Sabado
                  </div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Morro da Cruz e Capão Comprido */}
        <div className="lg:flex lg:w-[1000px] lg:gap-4">
          {/* PSC - Morro da Cruz */}
          <div
            className="flex flex-col w-[350px] sm:w-[550px] bg-[#141414] rounded-[10px] shadow-[0px_0px_10px_rgba(255,229,0,55)] p-3 gap-10
         lg:w-[1000px] mb-10 lg:mb-0"
          >
            <div className="text-white ">
              <div className="">
                {/* Local e Localização */}
                <h2 className="text-[#FFE500] font-semibold text-[24px] flex justify-center items-center gap-2 sm:text-[36px]">
                  <GrLocation /> PSC - Morro da Cruz
                </h2>
                <h3 className="text-white text-center leading-tight mb-3 sm:text-[20px]">
                  Morro da Cruz, Quadra X, Conjunto X <br /> São Sebastião, DF
                </h3>
              </div>
            </div>
            {/* PSC - JiuJitsu Feminino */}
            <div className="border-[#FFE500] border-l-2 pl-2 text-white">
              {/* Modalidade */}
              <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                Jiu Jitsu - Feminino
              </h2>
              {/* Data e Horarios */}
              <div className="gap-1.5 flex flex-col">
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Segunda</div>
                  <div className="flex items-center w-35 mx-2 font-semibold"></div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Terça</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5 sm:text-[20px]">
                    <FaRegClock className="mr-1" /> 08:30
                  </div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Quarta</div>
                  <div className="flex items-center mx-2 w-35 font-semibold"></div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Quinta</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                    <FaRegClock className="mr-1" /> 08:30
                  </div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Sexta</div>
                  <div className="flex items-center w-35 mx-2 font-semibold"></div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Sabado</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                    <FaRegClock className="mr-1" /> 09:00
                  </div>
                </div>
              </div>
            </div>
            {/* PSC - Judo - 07 a 17 Anos */}
            <div className="text-white">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Judo - 07 a 17 Anos
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col">
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Segunda</div>
                    <div className="flex items-center mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Terça</div>
                    <div className="flex items-center mx-2 gap-0.5 font-semibold pr-[4px]">
                      <FaRegClock className="mr-1" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quarta</div>
                    <div className="flex items-center mx-2  gap-0.5 font-semibold pr-[1px]">
                      <FaRegClock className="mr-1" /> 08:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quinta</div>
                    <div className="flex items-center justify-start mx-2 gap-0.5 font-semibold pr-[4px]">
                      <FaRegClock className="mr-1" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sexta</div>
                    <div className="flex items-center text-center mx-2 gap-0.5 font-semibold pr-[1px]">
                      <FaRegClock className="mr-1" /> 08:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sabado</div>
                  </div>
                </div>
              </div>
            </div>
            {/* PSC - Muay Thais - Adulto Misto */}
            <div className="text-white mb-5">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Muay Thai - Adulto Misto
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col">
                  <div className="flex items-center sm:text-[20px] sm:w-[500px] w-[320px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Segunda</div>
                    <div className="flex items-center w-35 mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] sm:w-[500px] w-[320px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Terça</div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                      <FaRegClock className="mr-1" /> 17:45
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] sm:w-[500px] w-[320px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quarta</div>
                    <div className="flex items-center mx-2 w-35 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] sm:w-[500px] w-[320px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quinta</div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                      <FaRegClock className="mr-1" /> 17:45
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] sm:w-[500px] w-[320px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sexta</div>
                    <div className="flex items-center w-35 mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] sm:w-[500px] w-[320px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sabado</div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PSC - Capão Cumprido */}
          <div
            className="flex flex-col w-[350px] sm:w-[550px] bg-[#141414] rounded-[10px] shadow-[0px_0px_10px_rgba(255,229,0,55)] p-3 gap-10
         lg:w-[1000px]"
          >
            <div className="text-white">
              <div className="">
                {/* Local e Localização */}
                <h2 className="text-[#FFE500] font-semibold text-[24px]  flex justify-center items-center gap-2 sm:text-[36px]">
                  <GrLocation /> PSC - Capão Comprido
                </h2>
                <h3 className="text-white text-center leading-tight mb-3 sm:text-[20px]">
                  Capão Comprido, Quadra 01, Rua 05 <br /> São Sebastião, DF
                </h3>
              </div>
            </div>
            {/* PSC - JiuJitsu Feminino */}
            <div className="border-[#FFE500] border-l-2 pl-2 text-white">
              {/* Modalidade */}
              <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                Jiu Jitsu - Feminino
              </h2>
              {/* Data e Horarios */}
              <div className="gap-1.5 flex flex-col">
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Segunda</div>
                  <div className="flex items-center w-35 mx-2 font-semibold"></div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Terça</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                    <FaRegClock className="mr-1" /> 08:30
                  </div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Quarta</div>
                  <div className="flex items-center mx-2 w-35 font-semibold"></div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Quinta</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                    <FaRegClock className="mr-1" /> 08:30
                  </div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Sexta</div>
                  <div className="flex items-center w-35 mx-2 font-semibold"></div>
                </div>
                <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                  <div className="ml-2 font-semibold">Sabado</div>
                  <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                    <FaRegClock className="mr-1" /> 09:00
                  </div>
                </div>
              </div>
            </div>
            {/* PSC - Judo - 07 a 17 Anos */}
            <div className="text-white">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Judo - 07 a 17 Anos
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col">
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Segunda</div>
                    <div className="flex items-center mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Terça</div>
                    <div className="flex items-center mx-2 gap-0.5 font-semibold pr-[4px]">
                      <FaRegClock className="mr-1" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quarta</div>
                    <div className="flex items-center mx-2  gap-0.5 font-semibold pr-[1px]">
                      <FaRegClock className="mr-1" /> 08:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quinta</div>
                    <div className="flex items-center justify-start mx-2 gap-0.5 font-semibold pr-[4px]">
                      <FaRegClock className="mr-1" /> 19:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sexta</div>
                    <div className="flex items-center text-center mx-2 gap-0.5 font-semibold pr-[1px]">
                      <FaRegClock className="mr-1" /> 08:00
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sabado</div>
                  </div>
                </div>
              </div>
            </div>
            {/* PSC - Muay Thais - Adulto Misto */}
            <div className="text-white mb-5">
              {/* Modalidade, Datas e Horarios */}
              <div className="border-[#FFE500] border-l-2 pl-2">
                {/* Modalidade */}
                <h2 className="mb-2 text-[18px] sm:text-[20px] text-center inline-block px-1 bg-[rgba(255,229,0,0.5)] rounded-[10px] font-semibold">
                  Muay Thai - Adulto Misto
                </h2>
                {/* Data e Horarios */}
                <div className="gap-1.5 flex flex-col">
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Segunda</div>
                    <div className="flex items-center w-35 mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Terça</div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                      <FaRegClock className="mr-1" /> 17:45
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quarta</div>
                    <div className="flex items-center mx-2 w-35 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Quinta</div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5">
                      <FaRegClock className="mr-1" /> 17:45
                    </div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sexta</div>
                    <div className="flex items-center w-35 mx-2 font-semibold"></div>
                  </div>
                  <div className="flex items-center sm:text-[20px] w-[320px] sm:w-[500px] lg:w-[450px] justify-between bg-[#1F1F1F] rounded-[4px]">
                    <div className="ml-2 font-semibold">Sabado</div>
                    <div className="flex items-center w-35 mx-2 font-semibold justify-end pr-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Horarios;
