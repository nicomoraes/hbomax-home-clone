type LinkProps = {
  text: string;
  link: string;
};

export const TopLink: React.FC<LinkProps> = ({ link, text }) => {
  return (
    <a
      className="text-sm font-semibold text-quinary duration-[200ms] hover:text-foreground"
      href={link}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export const MiddleLink: React.FC<LinkProps> = ({ link, text }) => {
  return (
    <a
      className="text-xs font-light text-quinary duration-[200ms] hover:text-foreground"
      href={link}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
