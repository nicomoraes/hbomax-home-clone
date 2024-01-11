import Image from "next/image";

interface CardProps {
  standard: string;
  hover: string;
}

const Card: React.FC<CardProps> = ({ standard, hover }) => {
  return (
    <div className="max-sm:brand-card-no-responsive brand-card-responsive">
      <Image
        src={standard}
        fill
        className="abolute left-0 top-0 z-10 transition duration-400 hover:opacity-0"
        alt={standard.split("-")[0] + " brands"}
      />
      <Image
        src={hover}
        fill
        className="abolute left-0 top-0 z-[5]"
        alt={standard.split("-")[0] + " brands"}
      />
    </div>
  );
};

export default Card;
