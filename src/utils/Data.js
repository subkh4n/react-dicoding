const getData = () => {
  return [
    {
      id: 1,
      name: "Dimas Saputra",
      tag: "dimasmds",
      imageUrl: "/images/dimasmds.jpeg",
    },
    {
      id: 2,
      name: "Arif Faizin",
      tag: "arifaizin",
      imageUrl: "/images/arifaizin.jpeg",
    },
    {
      id: 3,
      name: "Rahmat Fajri",
      tag: "rfajri27",
      imageUrl: "/images/rfajri27.jpeg",
    },
  ];
};

export { getData };




// 1. ContactApp (merah) : Sebagai parent yang menampung seluruh UI yang ditampilkan, termasuk lokasi di mana data contacts berada.

// 2. ContactList (kuning) : Sebagai container dalam membuat list contact.

// 3. ContactItem (hijau) : Sebagai container dalam menampilkan item contact.

// 4. ContactItemImage (biru) : Menampilkan gambar contact.

// 5. ContactItemBody (ungu) : Menampilkan data nama dan tag sosial media dari kontak.