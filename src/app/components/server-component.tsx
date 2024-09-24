export interface ServerComponentProps {
  children?: React.ReactNode;
}

console.log('Server Component');
export default function ServerComponent({ children }: ServerComponentProps) {
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}
