import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export default function Home() {
  console.log("Executing");
  return (
    <main>
      <Header></Header>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
// local host 3000/about
