import { JSX } from "react";
import { WagmiProvider as _WagmiProvider } from "wagmi";
import { config } from "../../_config/wagmi";

type WagmiProviderProps = {
  children: JSX.Element;
};

export const WagmiProvider = ({ children }: WagmiProviderProps) => {
  return <_WagmiProvider config={config}>{children}</_WagmiProvider>;
};
