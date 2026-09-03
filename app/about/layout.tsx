export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <html>
       
      <body className="min-h-full flex flex-col">
        <h1>Hello About Layout</h1>
        {children}</body>
    </html>
  );
}
