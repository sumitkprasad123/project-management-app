import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex item-center justify-center h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
};
