import './globals.css';
import Nav from '@/components/Nav';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
