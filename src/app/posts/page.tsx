import Card from "@/components/card";

export default function Posts() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-3">
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}
