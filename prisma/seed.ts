import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      title: 'Canon EOS 50D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      shortDescription: 'short desc of product',      
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      title: 'Canon EOS 5D',
      price: 5000,
      description: 'Professional camera, solid build',
      shortDescription: 'short desc of product',      
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      title: 'Canon R',
      price: 3000,
      description: 'Professional camera, we technology',
      shortDescription: 'short desc of product',      
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      title: 'Nikon D50',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      shortDescription: 'short desc of product',      
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      title: 'Leica q2',
      price: 5000,
      description: 'Small, compact, innovative',
      shortDescription: 'short desc of product',      
    },
  ];  
}

function getClients() {
  return [
    {
      id: '76de6c0a-7550-43b1-a7e7-ab323bc36e04',
      name: 'John Doe',
      address: '123 Main Street, London',
      phone: '123 456 789',
      email: 'jphn@adgafb.com.pl',
    },
    {
      id: 'fe1156dd-db24-4e87-b312-554b2338f8c9',
      name: 'Jane Doe',
      address: '123 Main Street, London',
      phone: '123 456 789',
      email: 'jane@adgafb.com.pl',
    },
    {
      id: '3dcc7fc1-6290-4e53-b206-46c6d46ee2e7',
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
      id: 'ba8e9671-bbb6-4363-9943-640c42f88640',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      clientId: '76de6c0a-7550-43b1-a7e7-ab323bc36e04',
      amount: 3,
      comment: 'takie tylko różowe'
    },
    {
      id: '9e54e25d-60db-4f6a-9421-fa48e1d7ccd2',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      clientId: 'fe1156dd-db24-4e87-b312-554b2338f8c9',
      amount: 3,
      comment: 'takie tylko zielone'
    },
    {
      id: '214022d1-8bf0-4f35-9ec2-243101867285',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      clientId: '3dcc7fc1-6290-4e53-b206-46c6d46ee2e7',
      amount: 3,
      comment: 'takie tylko czarne w kropki'
    },

  ];
}

function getPhotos() {
  return [
    {
      id: '0ea3823a-01d6-43ae-8753-a2498489b003',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      prodImg: 'aparat1.jpg',
    },
    {
      id: '339f8efc-5b81-49d2-9f78-78a0938fa7fd',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      prodImg: 'aparat2.jpg',
    },
    {
      id: '3e5b3494-833b-4878-a878-64b0c0bdd874',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      prodImg: 'aparat2.jpg',
    }, 
    {
      id: '4bfc21fc-9a4f-4fa1-ae7a-b63fef767e88',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      prodImg: 'aparat2.jpg',
    }, 
    {
      id: '354ebf88-3b6b-47ba-ade5-71cbeca822f6',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      prodImg: 'aparat2.jpg',
    }, 
    {
      id: '487b04b5-fe09-4692-84da-999c0e96cc77',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      prodImg: 'aparat2.jpg',
    }, 
    {
      id: '973f8e6e-938d-479c-84be-b3a2e0174f1c',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      prodImg: 'aparat1.jpg',
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

  await Promise.all(
    getPhotos().map(({ productId, ...photoData }) => {
      return db.photo.create({
        data: {
          ...photoData,
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );  


}

seed();