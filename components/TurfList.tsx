import { getTurfs } from "@/lib/data-turf";
import TurfCard from "./TurfCard";

export interface TurfProps {
  id: number;
  name: string;
  images: string[];
  football: boolean;
  cricket: boolean;
  discount: number;
  prices: {
    morningPrice: number;
    eveningPrice: number;
    nightPrice: number;
  };
  location: {
    address: string;
    mapLink: string;
  };
  surfaceType: string;
  reviews: {
    username: string;
    stars: number;
    text: string;
  }[];
}

const TurfList = async ({ filter }: { filter: string }) => {
  const turfs = await getTurfs();

  if (!turfs.length) return null;

  let displayTurfs: TurfProps[] = [];

  switch (filter) {
    case "all":
      displayTurfs = turfs;
      break;
    case "football":
      displayTurfs = turfs.filter((turf) => turf.football || !turf.cricket);
      break;
    case "cricket":
      displayTurfs = turfs.filter((turf) => turf.cricket || !turf.football);
      break;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12 xl:gap-14">
      {displayTurfs.map((turf) => (
        <TurfCard key={turf.id} turf={turf} />
      ))}
    </div>
  );
};

export default TurfList;
