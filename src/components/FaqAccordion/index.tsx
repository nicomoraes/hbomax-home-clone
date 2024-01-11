"use client";
import { Root } from "@radix-ui/react-accordion";
import AccordionItem from "./components/AccordionItem";
import Image from "next/image";

const FaqAccordion = () => {
  return (
    <Root
      type="single"
      defaultValue="item-1"
      collapsible
      className="mx-auto w-[80%] overflow-hidden"
    >
      <AccordionItem
        value="item-1"
        header="O que é HBO Max?"
        content={
          <p className="max-sm:text-base">
            HBO Max é a nova plataforma de streaming que reúne todo o conteúdo
            da HBO, além de filmes campeões em bilheteria, séries incríveis para
            maratonar e Max Originals exclusivos.
          </p>
        }
      />
      <AccordionItem
        value="item-2"
        header="O HBO Max tem teste grátis?"
        content={
          <p className="max-sm:text-base">
            A HBO Max, juntamente com a maioria dos provedores da HBO Max, não
            oferecem mais um teste gratuito para novos assinantes. Se uma
            assinatura ou oferta promocional incluir uma avaliação gratuita,
            você verá uma menção à avaliação gratuita ao se inscrever.
          </p>
        }
      />
      <AccordionItem
        value="item-3"
        header="Onde posso assistir HBO Max no Brasil?"
        content={
          <p className="max-sm:text-base">
            Para obter uma lista de provedores de TV, Internet e telefone que
            oferecem a HBO Max, você pode fazer o seguinte: No canto superior
            direito desta página, selecione ENTRAR. Selecione &quot;Entrar com
            um provedor&quot;. Selecione &quot;Ver todos os provedores&quot;.
            Aqui, você pode encontrar uma lista de todos os provedores que
            oferecem HBO Max na sua região. Você também pode ir para a página
            Escolha seu provedor e procurá-lo.
          </p>
        }
      />
      <AccordionItem
        value="item-4"
        header="Quanto custa o serviço HBO Max?"
        content={
          <p className="max-sm:text-base">
            A HBO Max está disponível em vários provedores e os preços variam de
            acordo com o país e com o plano escolhido. Para obter informações
            sobre preços, visite HBOMax.com.
          </p>
        }
      />
      <AccordionItem
        value="item-5"
        header="O que há de novo com HBO Max?"
        content={
          <p className="max-sm:text-base">
            Todos os meses temos estreias de filmes e séries. Você pode
            encontrá-los em nossa página de Próximos lançamentos.
          </p>
        }
      />
      <AccordionItem
        value="item-6"
        header="Quais séries e filmes posso assistir na HBO Max Brasil?"
        content={
          <>
            <p className="max-sm:text-base">
              Nosso streaming possui histórias para todos os públicos. A HBO Max
              inclui:
            </p>
            <ul className="max-sm:text-base">
              <li>- Todos os seus favoritos da HBO.</li>
              <li>{"- Nova programação exclusiva (Max Originals)."}</li>
              <li>- A melhor seleção de marcas e catálogos da WarnerMedia..</li>
              <li>- Uma grande seleção de séries e filmes adquiridos.</li>
            </ul>
            <p className="max-sm:text-base">
              Tem mais de 10.000 horas de entretenimento supreendente. Você
              sempre encontrará algo para todos os públicos, desde famílias com
              crianças pequenas até adultos de todas as idades.
            </p>
          </>
        }
      />
      <AccordionItem
        value="item-7"
        header="Em quais dispositivos posso assistir a filmes e séries do HBO Max?"
        content={
          <div className="flex items-center justify-start max-lg:flex-col lg:items-start lg:justify-between">
            {/* TVs */}
            <div className="flex w-max flex-col items-center justify-center gap-y-2">
              <Image
                src={"/images/faq/fwk-device-bw-tv.png"}
                alt="Television"
                width={150}
                height={104}
              />

              <h3 className="my-1 text-2xl font-medium text-foreground">
                Smart TVs
              </h3>
              <hr className="my-1 h-[2px] w-[70px] bg-quaternary" />
              <ul className="flex flex-col text-center text-base font-light">
                <li>Samsung</li>
                <li>LG</li>
                <li>Roku</li>
                <li>Android TV</li>
                <li>Apple TV</li>
                <li>Chromecast</li>
              </ul>
            </div>
            {/* Computadores */}
            <div className="flex w-max flex-col items-center justify-center gap-y-2">
              <Image
                src={"/images/faq/fwk-device-bw-computer.png"}
                alt="Computador"
                width={150}
                height={104}
              />

              <h3 className="my-1 text-2xl font-medium text-foreground">
                Computadores
              </h3>
              <hr className="my-1 h-[2px] w-[70px] bg-quaternary" />
              <ul className="flex flex-col text-center text-base font-light">
                <li>Chrome OS</li>
                <li>Mac OS</li>
                <li>Windows PC</li>
              </ul>
            </div>
            {/* Vídeo-games */}
            <div className="flex w-max flex-col items-center justify-center gap-y-2">
              <Image
                src={"/images/faq/fwk-device-bw-game-console.webp"}
                alt="Computador"
                width={150}
                height={104}
              />

              <h3 className="my-1 text-2xl font-medium text-foreground">
                Video-games
              </h3>
              <hr className="my-1 h-[2px] w-[70px] bg-quaternary" />
              <ul className="flex flex-col text-center text-base font-light">
                <li>PS5</li>
                <li>PS4</li>
                <li>Xbox One</li>
                <li>Xbox Series X|S</li>
              </ul>
            </div>
            {/* Smartphones e Tablets */}
            <div className="flex w-max flex-col items-center justify-center gap-y-2 max-lg:mt-4">
              <Image
                src={"/images/faq/fwk-device-bw-tablet.png"}
                alt="Computador"
                width={150}
                height={104}
              />

              <h3 className="my-1 text-2xl font-medium text-foreground">
                Smartphones e Tablets
              </h3>
              <hr className="my-1 h-[2px] w-[70px] bg-quaternary" />
              <ul className="flex flex-col text-center text-base font-light">
                <li>Android Phone & Tablet</li>
                <li>iPhone & iPad</li>
              </ul>
            </div>
          </div>
        }
      />
      <AccordionItem
        value="item-8"
        header="Tem algum custo extra para assistir HBO Max do meu celular ou tablet?"
        content={
          <p className="max-sm:text-base">
            Com o plano multitelas, você pode aproveitar todo o catálogo em
            todas as suas telas, incluindo smartphone e tablet.
          </p>
        }
      />
      <AccordionItem
        value="item-9"
        header="A HBO Max tem controle para menores?"
        content={
          <p className="max-sm:text-base">
            Sim, você pode criar um perfil infantil para cada um de seus filhos,
            acionando a opção &quot;Controles dos pais&quot;, que limita o
            conteúdo que pode ser visualizado.
          </p>
        }
      />
      <AccordionItem
        value="item-10"
        header="Onde ver a casa do dragão no Brasil?"
        content={
          <p className="max-sm:text-base">
            Novos episódios de House of the Dragon, a tão esperada história
            pregressa de Game of Thrones, estão disponíveis todas as semanas,
            com o final da temporada em 23 de outubro de 2022. A Casa do Dragão
            está disponível em 4K Ultra HD, HDR 10, Dolby Vision e Dolby Atmos
            (em dispositivos selecionados com o plano padrão/standard).
          </p>
        }
      />
    </Root>
  );
};

export default FaqAccordion;
