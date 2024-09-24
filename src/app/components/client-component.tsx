'use client';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

console.log('Client Component');
export default function ClientComponent({ children }: ClientComponentProps) {
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
