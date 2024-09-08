import { TurfProps } from "./TurfList";

const TurfCard = ({ turf }: { turf: TurfProps }) => {
  return <div>{turf.name}</div>;
};

export default TurfCard;
