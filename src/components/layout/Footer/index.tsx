import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MiddleLink, TopLink } from "./components/Links";

const links = {
  top: [
    {
      link: "#",
      text: "AGORA NA HBO MAX",
    },
    {
      link: "#",
      text: "EM BREVE",
    },
    {
      link: "#",
      text: "FILME EM DESTAQUE",
    },
    {
      link: "#",
      text: "SÉRIE",
    },
    {
      link: "#",
      text: "AJUDA",
    },
  ],
  middle: [
    {
      link: "#",
      text: "Privacidade",
    },
    {
      link: "#",
      text: "Termo de uso",
    },
    {
      link: "#",
      text: "Comunicados de impresa",
    },
    {
      link: "#",
      text: "Contatos de imprensa",
    },
    {
      link: "#",
      text: "Gerenciar preferências",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-y-4 bg-background py-6">
      <div className="mx-auto flex w-full flex-wrap justify-center gap-x-10">
        {links.top.map((tp_lnk) => (
          <TopLink
            key={`footer-top-link-${tp_lnk.text.split(" ").join("-")}`}
            text={tp_lnk.text}
            link={tp_lnk.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-full flex-wrap justify-center gap-x-12">
        {links.middle.map((md_lnk) => (
          <MiddleLink
            key={`footer-top-link-${md_lnk.text.split(" ").join("-")}`}
            text={md_lnk.text}
            link={md_lnk.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-full justify-center">
        <p className="text-center text-xs font-light text-quinary">
          © 2023 WarnerMedia Direct Latin America, LLC. Todos os direitos
          reservados. HBO Max é usado sob licença.
        </p>
      </div>
      <div className="mx-auto flex w-full items-center justify-center gap-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={25} className="my-auto block text-quinary" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} className="my-auto block text-quinary" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} className="my-auto block text-quinary" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={25} className="my-auto block text-quinary" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
