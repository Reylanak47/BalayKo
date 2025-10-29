// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const [admin, owner, tenant] = await Promise.all([
    prisma.user.upsert({ where: { email: "admin@balayko.app" }, update: {}, create: { email: "admin@balayko.app", name: "Admin", role: "ADMIN" } }),
    prisma.user.upsert({ where: { email: "owner@balayko.app" }, update: {}, create: { email: "owner@balayko.app", name: "Owner One", role: "OWNER" } }),
    prisma.user.upsert({ where: { email: "tenant@balayko.app" }, update: {}, create: { email: "tenant@balayko.app", name: "Tenant One", role: "TENANT" } }),
  ]);

  await prisma.listing.createMany({
    data: [
      {
        title: "Cozy Boarding near Lorma College",
        price: 3500,
        address: "#12 Barangay Sevilla, San Fernando, La Union",
        city: "San Fernando",
        distanceM: 850,
        amenities: "wifi,water,electricity,furnished",
        photosJson: JSON.stringify(["/img/sample1.jpg"]),
        ownerId: owner.id,
      },
      {
        title: "Beachside Room in San Juan",
        price: 5000,
        address: "Urbiztondo, San Juan, La Union",
        city: "San Juan",
        distanceM: 3200,
        amenities: "wifi,aircon,parking",
        photosJson: JSON.stringify(["/img/sample2.jpg"]),
        ownerId: owner.id,
      },
    ],
    skipDuplicates: true,
  });
}

main().finally(() => prisma.$disconnect());
