import { prisma } from "@/src/lib/prisma";

async function getCategories() {
  return prisma.category.findMany();
}

export default async function OrderSiteBar() {
  const categories = await getCategories();
  console.log(categories);

  return <aside className="md:w-72 md:h-screen bg-white">OrderSiteBar</aside>;
}
