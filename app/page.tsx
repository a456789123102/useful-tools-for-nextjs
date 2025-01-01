import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Useful Tools</h1>
        <p className="text-lg text-gray-700 mt-2">Explore various tools and examples for Next.js</p>
      </header>

      <section className="mt-8 text-center gap-2 flex flex-col ">
        <Link href="/react/tanStackQuery" className="text-xl text-blue-500 hover:underline">
          TanStack Query Example
        </Link>
        <Link href="/FramerMotion" className="text-xl text-blue-500 hover:underline">
         Framer Mition
        </Link>
        <Link href="/ChartJS" className="text-xl text-blue-500 hover:underline">
         ChartJS
        </Link>

      </section>
    </div>
  );
}
