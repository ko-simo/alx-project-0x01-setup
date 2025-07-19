'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to our Application!</h1>
        <p className="text-lg text-center max-w-xl">
          Navigate through posts and users using the navigation links above.
        </p>
      </main>
      <Footer />
    </>
  );
}
