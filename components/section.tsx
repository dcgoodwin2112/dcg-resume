type SectionProps = {
  children: React.ReactNode
}

export default function Section({ children }: SectionProps) {
  return <section>{children}</section>;
}
