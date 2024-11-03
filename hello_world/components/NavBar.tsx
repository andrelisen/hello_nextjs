import Link from "next/link";

export default function NavBar() {
    return (
        <ul>
          <li className="text-1xl sm:text-1xl font-bold font-[family-name:var(--font-geist-mono)]">
            <Link href={"/about"}>Sobre nós</Link>
          </li>
        </ul>
    );
}