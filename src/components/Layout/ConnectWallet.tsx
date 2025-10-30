import { LogOut, Wallet } from "lucide-react";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Dialog from "../Dialog";

export const ConnectWallet = () => {
  const { connectors, connect } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          if (!isConnected) {
            setOpen(true);
          }
        }}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:from-blue-700 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:scale-105 `}
      >
        <Wallet className="w-4 h-4" />

        <span className="hidden sm:block">
          {isConnected
            ? address?.slice(0, 4) + "..." + address?.slice(-4)
            : "Wallet Connected"}
        </span>
      </button>

      <Dialog isOpen={open} onClose={() => setOpen(false)}>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => {
              connect({ connector });
              setOpen(false);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium  bg-emerald-100 text-emerald-700 hover:bg-emerald-200 `}
          >
            {connector.name}
          </button>
        ))}
      </Dialog>

      {isConnected && (
        <button
          onClick={() => {
            disconnect();
          }}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 
          bg-red-100 text-red-700 hover:bg-red-200
          `}
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:block">Logout</span>
        </button>
      )}
    </div>
  );
};
