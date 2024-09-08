function Container({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid flex-1">
      <main className="max-w-7xl w-full mx-auto px-8 py-12">{children}</main>
    </div>
  );
}

export default Container;
