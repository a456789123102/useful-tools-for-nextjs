"use client";

import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios';

// ฟังก์ชันสำหรับดึงข้อมูล
const fetchMockData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

// สร้าง QueryClient
const queryClient = new QueryClient();

// คอมโพเนนต์สำหรับแสดงข้อมูล
function TanStackQueryComponent() {
  // ดึงข้อมูลจาก API ด้วย useQuery
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchMockData,
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">TanStack Query Example</h1>
        <p className="text-lg text-gray-700 mt-2">
          Learn how to manage data fetching and state efficiently.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Data Fetching Example</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {isLoading ? (
            <p className="text-blue-500">Loading data...</p>
          ) : error ? (
            <p className="text-red-500">Error fetching data: {error.message}</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {data.slice(0, 5).map((post) => (
                <li key={post.id} className="py-2">
                  <h4 className="text-lg font-semibold text-gray-900">{post.title}</h4>
                  <p className="text-gray-700">{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Why use TanStack Query?</h2>
        <ul className="list-disc ml-8 text-gray-700 mt-4">
          <li>Efficient data fetching and caching</li>
          <li>Easy state management</li>
          <li>Supports optimistic updates</li>
          <li>Works seamlessly with React</li>
        </ul>
      </section>
    </div>
  );
}

// ครอบ QueryClientProvider รอบ TanStackQueryComponent
export default function TanStackQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <TanStackQueryComponent />
    </QueryClientProvider>
  );
}
