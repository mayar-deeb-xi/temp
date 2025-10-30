import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JSX } from "react";

const client = new QueryClient();

export const ReactQueryProvider = ({ children }: { children: JSX.Element }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
