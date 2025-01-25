import { ConnectWallet, useConnectionStatus } from "@thirdweb-dev/react";
import { HomePage } from "./components/HomePage";
import { ErrorBoundary } from "./components/ErrorBoundary";

export function App() {
	const connectionStatus = useConnectionStatus();

	return (
		<ErrorBoundary>
			{connectionStatus === "connecting" || connectionStatus === "unknown" ? (
				<div className="min-h-screen flex items-center justify-center bg-zinc-900">
					<div className="flex flex-col items-center gap-4">
						<div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
						<div className="text-zinc-300">Connecting to wallet...</div>
					</div>
				</div>
			) : connectionStatus === "disconnected" ? (
				<div className="min-h-screen flex items-center justify-center bg-zinc-900">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-8 text-zinc-100">Welcome to Transparent Contracts</h1>
						<p className="text-lg mb-8 text-zinc-400">Connect your wallet to continue</p>
						<ConnectWallet 
							theme="dark"
							btnTitle="Connect Wallet"
						/>
					</div>
				</div>
			) : (
				<HomePage />
			)}
		</ErrorBoundary>
	);
}