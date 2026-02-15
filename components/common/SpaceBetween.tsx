type SpaceBetweenT = { firstText: string; lastText: string };

export default function SpaceBetween({ firstText, lastText }: SpaceBetweenT) {
  return (
    <span className=" flex items-center justify-center gap-0.5">
      <span>{firstText}</span>
      <span className="w-8 h-px bg-foreground group-hover:bg-background duration-500 group-hover:w-0" />
      <span>{lastText}</span>
    </span>
  );
}
