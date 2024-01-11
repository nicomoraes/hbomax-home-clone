import Image from "next/image";

interface SlideItemProps {
  title: string;
  cover: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ cover, title }) => {
  return (
    <div className="relative h-[383px] w-[260px]">
      <Image src={cover} alt={title} fill />
      <div className="absolute bottom-0 flex w-full flex-col text-center">
        <h3 className="text-2xl font-light text-foreground">{title}</h3>
        <p className="text-base font-semibold text-quaternary">
          ASSISTIR GRÁTIS
        </p>
      </div>
    </div>
  );
};

export default SlideItem;
