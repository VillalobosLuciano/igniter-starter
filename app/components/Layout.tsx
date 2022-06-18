import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Alert from "./Alert";

interface LayoutProps {
  children: React.ReactNode;
  preview: boolean;
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <Alert preview={preview} />
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
