import { LuIndianRupee } from "react-icons/lu";
import { Badge } from "./ui/badge";
import { TurfProps } from "./TurfList";

const PriceBadge = ({ prices }: { prices: TurfProps["prices"] }) => {
  return (
    <Badge variant={"priceBadge"}>
      <span className="text-xl font-medium flex items-center">
        <LuIndianRupee size={20} /> {prices.dayPrice}
      </span>
    </Badge>
  );
};

export default PriceBadge;
