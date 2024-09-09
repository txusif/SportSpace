import { IndianRupee } from "lucide-react";
import { TurfProps } from "./TurfList";
import { Badge } from "./ui/badge";

const PriceBadge = ({ turf }: { turf: TurfProps }) => {
  const { cricket, discount, price } = turf;

  return (
    <Badge variant={"priceBadge"}>
      {cricket ? (
        discount > 0 ? (
          <div className="flex gap-1 items-center">
            <span className="text-xl font-medium flex items-center">
              <IndianRupee size={20} /> {price - discount}
            </span>
            <span className="font-medium text-base text-muted-foreground line-through">
              {price}
            </span>
          </div>
        ) : (
          <span className="text-xl font-medium flex items-center">
            <IndianRupee size={20} /> {price}
          </span>
        )
      ) : discount > 0 ? (
        <div className="flex gap-1 items-center">
          <span className="text-xl font-medium flex items-center">
            <IndianRupee size={20} /> {price - discount}
          </span>
          <span className="font-medium text-base text-muted-foreground line-through">
            {price}
          </span>
        </div>
      ) : (
        <span className="text-xl font-medium flex items-center">
          <IndianRupee size={20} /> {price}
        </span>
      )}
    </Badge>
  );
};

export default PriceBadge;
