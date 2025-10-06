// app/not-found.js
import { redirect } from 'next/navigation';

export default function NotFound() {
  // Immediately redirect to home
  redirect('/');

  // No need to return anything
}
