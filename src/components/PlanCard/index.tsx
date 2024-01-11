interface PlanCardProps {
  period: string;
  periodLabel: string;
  price: string;
  featured: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  period,
  periodLabel,
  price,
  featured,
}) => {
  const pushToTheTop = () => (featured === true ? "max-lg:-order-1" : "");
  const showFeaturedStyle = () =>
    featured === true ? "plan-card-featured" : "";

  return (
    <div
      className={`relative col-span-1 flex h-72 w-full flex-col items-center justify-around rounded-lg bg-plan-card-gradient p-6
      ${pushToTheTop()}
      ${showFeaturedStyle()}
    `}
    >
      <div className="z-10 text-3xl font-bold text-foreground">{period}</div>
      <div className="z-10 flex flex-col text-center text-5xl font-bold text-foreground">
        {price}
        <p className="text-sm font-light">Igual a R$ 24,97 por mês</p>
      </div>
      <button className="btn-secondary z-10 font-semibold max-xl:text-sm">
        ESCOLHA O PLANO {periodLabel}
      </button>
      <div className=" rounded-b-lg" />
    </div>
  );
};

export default PlanCard;
