import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  Time: string;
}
const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/event/${slug}`} id="event-card">
      <Image src={image} alt={title} width={300} height={200} />

      <div className="flex flex-row gap-2">
        <Image alt="location" src="/icons/pin.svg" width={14} height={14} />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image alt="date" src="/icons/calendar.svg" width={14} height={14} />
          <p>{date}</p>
        </div>

        <div>
          <Image alt="time" src="/icons/clock.svg" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
