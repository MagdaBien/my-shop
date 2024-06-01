import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8c17259',
      title: 'Canon EOS 50Ds',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
  ];
}

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a13360',
      name: 'John Doe',
      address: '123 Main Street, London',
      phone: '123 456 789',
      email: 'kowalsky@adgafb.com.pl',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c569c8a17261',
      name: 'Jane Doe',
      address: '123 Main Street, London',
      phone: '123 456 789',
      email: 'kowalsky@adgafb.com.pl',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c578c8a17262',
      name: 'Thomas Jefferson',
      address: 'Baker Street 12B, New York',
      phone: '123 456 789',
      email: 'kowalsky@adgafb.com.pl',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a13360',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a13360',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a13360',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
  ];
}



async function seed() {

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getClients().map((client) => {
      return db.client.create({ data: client });
    }),
  );

  await Promise.all(
    getOrders().map(({ productId, clientId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
          client: {
            connect: { id: clientId },
          },
        },
      });
    }),
  );



}
seed();