const Transparencia = () => {
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
            TRANSPARÊNCIA
          </h1>
          <p className="text-[#F8FAFC] font-[SheepmanW03-Bold] text-[18px] sm:text-[30px] lg:text-[36px] leading-tight">
            PUBLICAÇÕES DE RECURSOS PÚBLICOS E PRIVADOS
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
      <section className="mt-3">
        {/* Républica Federativa Do Brasil */}
        <div className="text-white flex flex-col justify-center items-center text-center mx-15">
          <strong className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-[#FFE500] font-[SegoeUI] mb-3">
            {" "}
            REPÚBLICA FEDERATIVA DO BRASIL <br /> MINISTÉRIO DO ESPORTE
          </strong>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Termo De Fomento Ministério Do Esporte no 245/2024 Transferegov.br
            no 963620/2024
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Termo De Fomento Ministério Do Esporte/Associação Desportiva
            Cultural e Educacional Campeão No Esporte e Na Vida - Transferegov
            No 942819/2023.
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Termo De Fomento Ministério Do Esporte/Associação Desportiva
            Cultural e Educacional Campeão No Esporte e Na Vida - Transferegov
            No 944145/2023.
          </a>
        </div>
        {/* Governo Do Distrito Federal */}
        <div className="text-white flex flex-col justify-center items-center text-center mx-15">
          <strong className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-[#FFE500] font-[SegoeUI] mb-3 mt-10">
            {" "}
            GOVERNO DO DISTRITO FEDERAL <br /> SECRETARIA DE ESPORTE E LAZER DO
            DISTRITO FEDERAL
          </strong>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Termo de Fomento (MROSC) N.o 132/2024
          </a>
        </div>
        {/* AVISO DE COTAÇÃO PRÉVIA */}
        <div className="text-white flex flex-col justify-center items-center text-center mx-15">
          <strong className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-[#FFE500] font-[SegoeUI] mb-3 mt-10">
            {" "}
            AVISO DE COTAÇÃO PRÉVIA
          </strong>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Aviso De Cotação Prévia Nº 004/2022
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Aviso De Cotação Prévia Nº 004/2023
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Aviso De Cotação Prévia Nº 001/2024
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Aviso De Cotação Prévia Nº 002/2024
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Aviso De Cotação Prévia Nº 003/2024
          </a>
        </div>
        {/* PROCESSO SELETIVO SIMPLIFICADO*/}
        <div className="text-white flex flex-col justify-center items-center text-center mx-15">
          <strong className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold text-[#FFE500] font-[SegoeUI] mb-3 mt-10">
            {" "}
            PROCESSO SELETIVO SIMPLIFICADO
          </strong>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Processo Seletivo Simplificado Nº 004/2023
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Processo Seletivo Simplificado Nº 001/2024
          </a>
          <a
            href=""
            className="text-[16px] sm:text-[18px] lg:text-[20px] underline font-[SegoeUI] mb-4"
          >
            Processo Seletivo Simplificado Nº 002/2024
          </a>
        </div>
      </section>
    </>
  );
};

export default Transparencia;
