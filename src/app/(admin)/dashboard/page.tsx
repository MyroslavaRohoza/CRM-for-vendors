import MagicButton from '@/app/components/magic-button';

export interface PageProps {
  children: React.ReactNode;
}

export default function ComponentName() {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}
