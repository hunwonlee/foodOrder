import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function EdiEventPage() {
  const data = useRouteLoaderData('event-detail');
  return (
    <>
      <EventForm method="patch" event={data.event} />;
    </>
  );
}
