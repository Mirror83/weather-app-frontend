import { Rainbow } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Rainbow size={64} />
        <p className="text-xl">Loading...</p>
        <div className="spinner-dot-intermittent"></div>
      </div>
    </div>
  );
}
