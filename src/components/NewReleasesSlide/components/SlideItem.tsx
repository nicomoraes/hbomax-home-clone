import Image from "next/image";
import CastMember, { type CastMemberProps as CastType } from "./CastMember";

export interface SlideItemProps {
  cast: CastType[];
  cover: string;
  date: string;
  synopsis: string;
  title: string;
}

const SlideItem: React.FC<SlideItemProps> = ({
  cast,
  cover,
  date,
  synopsis,
  title,
}) => {
  return (
    <>
      {/* Large Screens */}
      <div className={`hidden gap-x-5 sm:flex`}>
        <div className="flex w-1/2 flex-col gap-y-1 text-foreground">
          <h3 className="text-2xl font-semibold tracking-wider">{title}</h3>
          <span className="w-max bg-new-releases-details-date-gradient p-1 font-semibold tracking-wider">
            {date}
          </span>
          <p className="my-4 font-light max-lg:text-sm">{synopsis}</p>
          <div className="flex justify-around gap-x-4">
            {cast.map((castMember) => (
              <CastMember
                key={`char=${title}-${castMember.character}`}
                {...castMember}
              />
            ))}
          </div>
        </div>
        <div className="relative h-80 w-1/2">
          <Image src={cover} alt={"Image"} fill className="object-contain" />
          <Image
            src={"/images/play-icon.png"}
            alt={"Image"}
            width={85}
            height={85}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
      {/* Mobile Screens */}
      <div className={`flex flex-col gap-x-5 sm:hidden`}>
        <div className="flex h-9 w-full items-center justify-center bg-new-releases-details-date-gradient text-center font-semibold tracking-wider text-foreground">
          {date}
        </div>
        <div className="relative">
          <Image
            src={cover}
            alt={title}
            width={1024}
            height={385}
            className="object-contain"
          />
          <Image
            src={"/images/play-icon.png"}
            alt={"Play icon"}
            width={85}
            height={85}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        <div className="z-10 mx-auto -mt-10 flex w-full max-w-[95%] flex-col items-center justify-center rounded-lg bg-new-releases-details-mobile-gradient px-4 py-1 text-foreground">
          <h3 className="text-center text-2xl font-semibold tracking-wider">
            {title}
          </h3>
          <p className="my-4 font-light max-lg:text-sm">{synopsis}</p>
          <div className="flex w-full justify-around">
            {cast.map((castMember) => (
              <CastMember
                key={`char=${title}-${castMember.character}`}
                {...castMember}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItem;
