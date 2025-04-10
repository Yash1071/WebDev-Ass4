'use client';

import { useEffect, useState } from 'react';
import { db } from '@/firebase/config';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';

type Entry = {
  id: string;
  content: string;
  timestamp?: Timestamp;
};

export default function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const q = query(collection(db, 'entries'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Entry, 'id'>),
      }));
      setEntries(data);
    };
    fetchEntries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">All Entries</h2>
        <div className="space-y-4">
          {entries.map(entry => (
            <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
              <p>{entry.content}</p>
              <small className="text-gray-500 block mt-2">
                {entry.timestamp?.toDate().toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
