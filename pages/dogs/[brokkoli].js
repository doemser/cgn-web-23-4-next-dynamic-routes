import { useRouter } from "next/router";
import { dogs } from "@/lib/data";

export default function DogDetails() {
  const router = useRouter();
  const { query } = router;

  const dog = dogs.find((dog) => dog.id === query.brokkoli);

  if (!dog) {
    return;
  }

  return <>{dog.name}</>;
}
