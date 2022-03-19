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
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
