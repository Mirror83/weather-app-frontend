import { Body } from "@/components/body";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row sm:gap-10">
      <Sidebar />
      <Body />
    </div>
  );
}
