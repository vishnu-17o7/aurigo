import { useAddress, useBalance, useChainId } from "@thirdweb-dev/react";

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const getNetworkName = (chainId: number) => {
  switch (chainId) {
    case 1:
      return "Ethereum";
    case 11155111:
      return "Sepolia";
    default:
      return "Unknown Network";
  }
};

export function WalletDisplay() {
  const address = useAddress();
  const { data: balance } = useBalance();
  const chainId = useChainId();

  if (!address) return null;

  return (
    <div className="flex items-center gap-3 bg-zinc-800/30 border border-zinc-700/50 rounded-xl px-4 py-3 shadow-xl">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <div className="text-sm text-violet-400 font-medium">
            {address.slice(2, 4).toUpperCase()}
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium text-zinc-100 truncate">
            {shortenAddress(address)}
          </div>
          {chainId && (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
              <span className="text-xs text-violet-300">
                {getNetworkName(chainId)}
              </span>
            </div>
          )}
        </div>
        {balance && (
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <span className="font-medium text-zinc-300">
              {parseFloat(balance.displayValue).toFixed(4)}
            </span>
            <span>{balance.symbol}</span>
          </div>
        )}
      </div>
    </div>
  );
}