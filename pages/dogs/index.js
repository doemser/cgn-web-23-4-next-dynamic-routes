import Link from "next/link";
import { dogs } from "@/lib/data";

export default function Dogs() {
  return (
    <>
      <h1>Dogs</h1>
      <Link href="/">Homepage</Link>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Link href={`/dogs/${dog.id}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
