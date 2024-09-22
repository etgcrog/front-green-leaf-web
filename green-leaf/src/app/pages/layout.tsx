import Header from "@/components/personal/header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <div>
            <body className="">
                <Header></Header>
                <div className="h-fit min-h-[92vh] pl-16 pr-16">
                    {children}
                </div>
            </body>
        </div>
      
    </html>
  );
}
