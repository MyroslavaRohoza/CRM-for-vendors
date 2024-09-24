import { headers } from "next/headers";

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

console.log('Server Component Copy');
console.log(headers());
export default function ServerComponentCopy({ children }: ServerComponentCopyProps) {
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
