import { Footer } from "@/components/feature/footer";
import { Header } from "@/components/feature/header";
import { Heading } from "@mwolfart/cobalt-ui";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Heading variant="h1">Welcome</Heading>
      </main>
      <Footer />
    </div>
  );
}
