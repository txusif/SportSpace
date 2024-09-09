import { getTurf, getTurfs } from "@/lib/data-turf";

export async function generateMetadata({
  params,
}: {
  params: { turfId: string };
}) {
  const turf = await getTurf(Number(params.turfId));
  const { name } = turf;
  return { title: name };
}

export async function generateStaticParams() {
  const turfs = await getTurfs();
  const ids = turfs.map((turf) => ({ turfId: String(turf.id) }));
  return ids;
}

export interface TurfProps {
  id: number;
  created_at: string;
  name: string;
  description: string;
  image: string;
  amenities: string;
  football: boolean;
  cricket: boolean;
  rules: string;
  dayPrice: number;
  nightPrice: number;
  discount: number;
  ratings: number;
  location: {
    address: string;
    mapLink: string;
  };
  footballPrice: number;
  cricketPrice: number;
  contactInfo: { phone: string; email: string };
  availability: { openTime: string; closeTime: string };
  surfaceType: string;
}

export default async function Turf({
  params: { turfId },
}: {
  params: { turfId: string };
}) {
  const turf: TurfProps = await getTurf(Number(turfId));

  console.log(turf);

  return <div>{turf.name}</div>;
}
