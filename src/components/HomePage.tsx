import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { ArrowRight, Building, FileText, Shield } from "lucide-react";
import { Button } from "./Button";
import { ErrorBoundary } from "./ErrorBoundary";
import { WalletDisplay } from "./WalletDisplay";

export function HomePage() {
  const address = useAddress();
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="p-6 border-b border-zinc-800">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-zinc-100">Transparent Contracts</h1>
            <WalletDisplay />
          </div>
          <div className="flex items-center gap-4">
            <ErrorBoundary>
              <ConnectWallet 
                theme="dark"
                btnTitle={address ? "Connected" : "Connect Wallet"}
              />
            </ErrorBoundary>
            <Button>Submit a Bid</Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-zinc-100">Transparent Construction Contracts</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Revolutionizing the construction industry with clear, fair, and efficient contract processes.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card
            icon={<Building className="w-10 h-10 mb-2 text-violet-500" />}
            title="Streamlined Process"
            description="Simplify your construction projects with our transparent bidding and contract system."
          />
          <Card
            icon={<FileText className="w-10 h-10 mb-2 text-violet-500" />}
            title="Clear Documentation"
            description="All contracts and bids are clearly documented and easily accessible to all parties involved."
          />
          <Card
            icon={<Shield className="w-10 h-10 mb-2 text-violet-500" />}
            title="Increased Trust"
            description="Build stronger relationships with clients and contractors through our transparent system."
          />
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-zinc-100">Ready to get started?</h3>
          <Button size="lg" className="mt-2">
            Submit a Bid <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>

      <footer className="border-t border-zinc-800 p-6">
        <div className="container mx-auto text-center text-sm text-zinc-400">
          © 2024 Transparent Construction Contracts. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Card({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900/50 transition-colors">
      <div className="flex flex-col items-start">
        {icon}
        <h3 className="text-lg font-semibold mb-2 text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}