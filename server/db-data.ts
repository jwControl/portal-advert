export const ADVERTS: any = {
  1: {
    id: 1,
    title: 'Golden Retriever Puppies',
    longDescription:
      'Adorable Golden Retriever puppies looking for a loving home. They are vaccinated, dewormed, and ready to join your family.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/0cydyt17gh4u1-PL/image;s=1000x700',
    category: 'DOG',
    seqNo: 0,
    price: 300,
    createdDate: '2025-01-15',
  },

  2: {
    id: 2,
    title: 'Persian Cat for Adoption',
    longDescription:
      'Beautiful Persian cat, 2 years old, very friendly and playful. Looking for a caring owner.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/6vcr8rb92m472-PL/image;s=1000x700',
    category: 'CAT',
    seqNo: 0,
    price: 100,
    createdDate: '2025-02-10',
  },

  3: {
    id: 3,
    title: 'Macaw Parrot',
    longDescription:
      'Vibrant Macaw parrot, 3 years old, trained to talk and very social. Perfect for bird enthusiasts.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/wwdro1zbu7f9-PL/image;s=1000x700',
    category: 'BIRD',
    seqNo: 0,
    price: 500,
    createdDate: '2025-03-05',
  },

  4: {
    id: 4,
    title: 'Thoroughbred Horse',
    longDescription:
      'Majestic Thoroughbred horse, 5 years old, trained for riding and competitions. Excellent temperament.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/2emztt7ugj691-PL/image;s=1000x700',
    category: 'HORSE',
    seqNo: 0,
    price: 2000,
    createdDate: '2025-04-20',
  },

  5: {
    id: 5,
    title: 'Siberian Husky Puppies',
    longDescription:
      'Energetic Siberian Husky puppies, 8 weeks old, vaccinated and ready for adoption.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/mkxxwb13ky5z-PL/image;s=1000x700',
    category: 'DOG',
    seqNo: 1,
    price: 400,
    createdDate: '2025-05-18',
  },

  6: {
    id: 6,
    title: 'Bengal Cat',
    longDescription:
      'Exotic Bengal cat, 1 year old, very active and affectionate. Looking for a loving home.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/kde2t3rljpjc3-PL/image;s=1000x700',
    category: 'CAT',
    seqNo: 1,
    price: 150,
    createdDate: '2025-06-12',
  },

  7: {
    id: 7,
    title: 'Cockatiel Pair',
    longDescription:
      'A pair of Cockatiels, 2 years old, hand-tamed and very friendly. Ideal for bird lovers.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/wwdro1zbu7f9-PL/image;s=1000x700',
    category: 'BIRD',
    seqNo: 1,
    price: 120,
    createdDate: '2025-07-08',
  },

  8: {
    id: 8,
    title: 'Arabian Horse',
    longDescription:
      'Graceful Arabian horse, 4 years old, trained for endurance riding. A true companion for horse enthusiasts.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/92fms9jrd4992-PL/image;s=1000x700',
    category: 'HORSE',
    seqNo: 1,
    price: 2500,
    createdDate: '2025-07-15',
  },

  9: {
    id: 9,
    title: 'Beagle Puppies',
    longDescription:
      'Charming Beagle puppies, 10 weeks old, vaccinated and dewormed. Ready to bring joy to your home.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/kimecrd61uxm3-PL/image;s=1000x700',
    category: 'DOG',
    seqNo: 2,
    price: 350,
    createdDate: '2025-07-14',
  },

  10: {
    id: 10,
    title: 'Sphynx Cat',
    longDescription:
      'Unique Sphynx cat, 3 years old, very affectionate and playful. Perfect for allergy sufferers.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/op66ijz5fdkl2-PL/image;s=1000x700',
    category: 'CAT',
    seqNo: 2,
    price: 200,
    createdDate: '2025-07-11',
  },

  11: {
    id: 11,
    title: 'African Grey Parrot',
    longDescription:
      'Intelligent African Grey parrot, 4 years old, trained to mimic sounds and words. A delightful companion.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/qt52hixnviy52-PL/image;s=1000x700',
    category: 'BIRD',
    seqNo: 2,
    price: 600,
    createdDate: '2025-07-07',
  },

  12: {
    id: 12,
    title: 'Friesian Horse',
    longDescription:
      'Elegant Friesian horse, 6 years old, trained for dressage and riding. A true showstopper.',
    photoUrl:
      'https://ireland.apollo.olxcdn.com/v1/files/p2cppsasahqu1-PL/image;s=1000x700',
    category: 'HORSE',
    seqNo: 2,
    price: 3000,
    createdDate: '2025-07-16',
  },
};

export const USERS = {
  1: {
    id: 1,
    email: 'test@angular-university.io',
    password: 'test',
    pictureUrl:
      'https://lh3.googleusercontent.com/-1pUNnTB3vaA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdn4uEc0ti8YE4Uuw6_Kz04tVe2Mg.CMID/s32-c/photo.jpg',
  },
};

export function findAdvertById(advertId: number) {
  return ADVERTS[advertId];
}

export function authenticate(email: string, password: string) {
  const user: any = Object.values(USERS).find((user) => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
