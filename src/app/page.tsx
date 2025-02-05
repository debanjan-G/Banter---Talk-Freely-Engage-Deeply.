import { Button } from "@heroui/button";
export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Banter</h1>
      <Button className="bg-blue-500 text-white">Click me</Button>
    </div>
  );
}
