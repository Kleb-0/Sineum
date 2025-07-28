export default function Card() {
  return (
    <div className="border rounded-lg p-3">
      <div className="pb-2 mb-2 border-b">
        <h1 className="text-xl font-semibold">Nome do título: bláblá blá</h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam...
      </p>
    </div>
  );
}
