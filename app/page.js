import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>
        Hello
      </h1>
      <Link href="/tattoos">Go to Tattoos</Link>
    </div>
  );
}
