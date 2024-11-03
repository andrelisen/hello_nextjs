import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-geist-mono)]">
          Hello World 🦖
        </h1>
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
      </main>
    </div>
  );
}
