import SideNavigation from "@/components/SideNavigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col md:grid md:grid-cols-[12rem_1fr] gap-12">
      <SideNavigation />
      <div className="py-0">{children}</div>
    </div>
  );
}
