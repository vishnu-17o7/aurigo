import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>
);