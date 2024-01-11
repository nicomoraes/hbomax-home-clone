import Image from "next/image";

import BrandCard from "@/components/BrandCard";
import PlanCard from "@/components/PlanCard";
import FaqAccordion from "@/components/FaqAccordion";
import FreeEpisodesSlide from "@/components/FreeEpisodesSlide";
import NewReleasesSlide from "@/components/NewReleasesSlide";

import { PAYMENT_PLANS } from "@/constants/plans";

export default function Home() {
  return (
    <main className="h-min-screen w-full bg-background">
      {/*  */}
      <section className="before:bottom-mask-gradient relative min-h-screen w-full">
        <video
          src="/video/hero-video.mp4"
          autoPlay
          loop
          muted
          className="min-h-screen w-screen object-cover"
        />
        <div className="absolute top-[40%] z-10 flex h-max w-full flex-col items-center gap-y-2">
          <Image
            src={"/images/hero.png"}
            className=""
            width={360}
            height={184}
            alt="Economize 5 meses com o plano anual"
          />
          <button className="btn-secondary mt-4">ASSINE AGORA</button>
          <p className="flex flex-col text-center text-xs text-foreground">
            *aplicável ao plano anual com <span>o pagamento antecipado.</span>
          </p>
        </div>
      </section>
      <section className="my-12 h-max w-full">
        <div className="w-full bg-plan-container-image bg-cover bg-center">
          <h2 className="w-full text-center text-3xl text-foreground">
            Escolha seu plano
          </h2>
          <div className="my-8 flex w-full flex-col items-center justify-center">
            <p className="text-xs font-semibold tracking-wider text-foreground">
              O QUE ESTÁ INCLUSO?
            </p>
            <ul className="mb-4 mt-8 grid w-full max-w-screen-lg grid-cols-3 place-items-center gap-y-4 text-center text-sm font-light text-foreground max-md:mx-2">
              <li className="plans-item-list-before col-span-full md:col-span-1">
                Aproveite em todos os seus dispositivos.
              </li>
              <li className="plans-item-list-before col-span-full w-full md:col-span-1">
                Chromecast e Airplay disponíveis.
              </li>
              <li className="plans-item-list-before col-span-full w-full md:col-span-1">
                Assista em até 3 telas ao mesmo tempo.
              </li>
              <li className="plans-item-list-before col-span-full w-full md:col-span-1">
                Tenha conteúdo em alta definição, com qualidade 4K.
              </li>
              <li className="plans-item-list-before col-span-full w-full md:col-span-1">
                Baixe suas séries e filmes favoritos, assista onde e quando
                quiser.
              </li>
              <li className="plans-item-list-before col-span-full w-full md:col-span-1">
                Crie até 5 perfis diferentes.
              </li>
            </ul>
            <div className="mt-10 grid w-full grid-cols-1 max-xl:gap-y-5 max-xl:px-6 lg:max-w-[1200px] lg:grid-cols-3 lg:gap-x-12">
              {PAYMENT_PLANS.map((plan) => (
                <PlanCard
                  key={`plan-${plan.periodLabel}`}
                  period={plan.period}
                  periodLabel={plan.periodLabel}
                  price={plan.price}
                  featured={plan.featured}
                />
              ))}
            </div>
            <p className="my-12 w-full max-w-screen-md text-center text-xs font-light text-foreground">
              *Necessário pagamento antecipado. Economia baseada no preço do
              plano multitelas anual comparado ao preço do plano multitelas
              mensal durante 12 meses, excluindo impostos. Termos se aplicam.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-12 w-full bg-new-releases-container-gradient">
        <h2 className="w-full text-center text-2xl font-normal text-foreground">
          Estreias que vão se transformar nos seus novos favoritos.
        </h2>
        <NewReleasesSlide />
      </section>
      <section className="mb-12 flex w-full items-center justify-center bg-new-releases-container-bottom-gradient  p-2">
        <button className="btn-secondary mt-5 text-xs tracking-wider">
          ASSINE AGORA
        </button>
      </section>
      <section className="my-12 h-max w-full">
        <h2 className="w-full text-center text-2xl font-normal text-foreground">
          Episódios grátis da HBO Max, sem precisar de uma assinatura
        </h2>
        <FreeEpisodesSlide />
        <div className="my-12 flex w-full justify-center">
          <button className="btn-primary text-base tracking-wider">
            ASSISTIR EPISÓDIOS GRÁRIS
          </button>
        </div>
      </section>
      <section className="my-12 flex h-max w-full flex-col justify-center">
        <h2 className="w-full text-center text-2xl font-normal text-foreground">
          Uma experiência simples e completa
        </h2>
        <div className="mx-auto mt-5 flex w-full max-w-[1140px] justify-center">
          <Image
            src={"/images/br_devices_trophy.webp"}
            alt="vasco"
            width={1007}
            height={534}
          />
        </div>
        <div className="mx-auto mt-12 flex w-full max-w-[1140px] justify-center">
          <ul className="flex w-full items-start text-center text-lg font-light text-foreground max-sm:flex-col max-sm:gap-y-5 max-sm:px-2">
            <li className="flex flex-col items-center justify-center self-start">
              <hr className="mb-5 h-[2px] w-[50px] bg-quaternary" />
              <p>
                Crie até 5 perfis e receba recomendações personalizadas para
                cada um
              </p>
            </li>
            <li className="flex flex-col items-center justify-center">
              <hr className="mb-5 h-[2px] w-[50px] bg-quaternary" />
              <p>Baixe qualquer conteúdo disponível para assistir offline</p>
            </li>
            <li className="flex flex-col items-center justify-center">
              <hr className="mb-5 h-[2px] w-[50px] bg-quaternary" />
              <p>
                Defina o conteúdo que as crianças podem assistir de acordo com
                cada faixa etária
              </p>
            </li>
            <li className="flex flex-col items-center justify-center">
              <hr className="mb-5 h-[2px] w-[50px] bg-quaternary" />
              <p>Adicione seus títulos favoritos para assistir quando quiser</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto my-12 flex h-max w-full max-w-screen-md items-center justify-center max-md:flex-col max-md:p-4">
        <Image
          src={"/images/ben10.png"}
          alt="vasco"
          width={486}
          height={438}
          className="h-[438] w-[486px] md:h-[189px] md:w-[210px]"
        />
        <h2 className="text-center text-2xl font-normal text-foreground md:text-3xl">
          A HBO Max traz diversão para a família toda
        </h2>
        <Image
          src={"/images/fam_and_kids-looney_toons-img.png"}
          alt="vasco"
          width={486}
          height={438}
          className="h-[438] w-[486px] md:h-[189px] md:w-[210px]"
        />
      </section>
      <section className="my-12 h-max w-full">
        <h2 className="mb-10 text-center text-xl font-normal text-foreground">
          Descubra novos universos
        </h2>
        <BrandCard />
      </section>
      <section className="mt-40 h-max w-full">
        <h2 className="mb-10 text-center text-xl font-normal text-foreground">
          Alguma pergunta? A gente tem a resposta.
        </h2>
        <FaqAccordion />
      </section>
    </main>
  );
}
