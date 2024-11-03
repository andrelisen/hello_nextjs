import Link from "next/link";

export default function MenuInicial() {
    return (
        <ul>
          <li className="text-1xl sm:text-1xl font-bold font-[family-name:var(--font-geist-mono)]">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-1xl sm:text-1xl font-bold font-[family-name:var(--font-geist-mono)]">
            <Link href={"/products/shirt"}>Produtos - Camiseta</Link>
          </li>
          <li className="text-1xl sm:text-1xl font-bold font-[family-name:var(--font-geist-mono)]">
            <Link href={"/products/skirt"}>Produtos - Camisa</Link>
          </li>
          <li className="text-1xl sm:text-1xl font-bold font-[family-name:var(--font-geist-mono)]">
            <Link href={"/products/pants/blue"}>Produtos - Calça Azul</Link>
          </li>
          <li className="text-1xl sm:text-1xl font-bold font-[family-name:var(--font-geist-mono)]">
            <Link href={"/products/pants/red"}>Produtos - Calça Vermelha</Link>
          </li>
        </ul>
    );
}