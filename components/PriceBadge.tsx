import { IndianRupee } from "lucide-react";
import { TurfProps } from "./TurfList";
import { Badge } from "./ui/badge";

const PriceBadge = ({ turf }: { turf: TurfProps }) => {
  const { cricket, discount, cricketPrice, footballPrice } = turf;

  return (
    <Badge variant={"priceBadge"}>
      {cricket ? (
        discount > 0 ? (
          <div className="flex gap-1 items-center">
            <span className="text-xl font-medium flex items-center">
              <IndianRupee size={20} /> {cricketPrice - discount}
            </span>
            <span className="font-medium text-base text-muted-foreground line-through">
              {cricketPrice}
            </span>
          </div>
        ) : (
          <span className="text-xl font-medium flex items-center">
            <IndianRupee size={20} /> {cricketPrice}
          </span>
        )
      ) : discount > 0 ? (
        <div className="flex gap-1 items-center">
          <span className="text-xl font-medium flex items-center">
            <IndianRupee size={20} /> {footballPrice - discount}
          </span>
          <span className="font-medium text-base text-muted-foreground line-through">
            {footballPrice}
          </span>
        </div>
      ) : (
        <span className="text-xl font-medium flex items-center">
          <IndianRupee size={20} /> {footballPrice}
        </span>
      )}
    </Badge>
  );
};

export default PriceBadge;
