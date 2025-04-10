'use client';

import { FormEvent, useState } from 'react';
import { db, auth } from '@/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

export default function FormPage() {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    try {
      await addDoc(collection(db, 'entries'), {
        uid: user.uid,
        content: input,
        timestamp: serverTimestamp(),
      });
      alert('Saved!');
      setInput('');
    } catch (err) {
      const error = err as FirebaseError;
      alert('Error saving: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Submit Entry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            placeholder="Enter something..."
            className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
