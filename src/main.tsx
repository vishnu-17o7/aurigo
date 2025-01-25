import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider 
        activeChain={Sepolia}
        clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect()
        ]}
        dAppMeta={{
          name: "Construction Contracts",
          description: "Transparent Construction Contracts Application",
          url: window.location.href,
        }}
      >
        <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </React.StrictMode>
);