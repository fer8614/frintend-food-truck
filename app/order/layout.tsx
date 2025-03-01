import OrderSiteBar from "@/components/order/0rderSiteBar";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <OrderSiteBar />
        <main className="md:flex-1 md:h-screen md:overflow-scroll p-5">
          {children}
        </main>
        <OrderSummary />
      </div>
    </>
  );
}
