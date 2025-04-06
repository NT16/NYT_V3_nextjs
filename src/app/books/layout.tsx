import FloatingButton from "@/app/ui/FloatingButton";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      {children}

      <FloatingButton />
    </div>
  );
}
