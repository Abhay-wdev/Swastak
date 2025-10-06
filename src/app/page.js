'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Spice Store</h1>
        <p className="text-xl text-gray-600 mb-8">
          Premium quality spices delivered to your doorstep
        </p>
        <button
          onClick={() => router.push('/products')}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-600 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}