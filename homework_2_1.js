// Об'єкти

const MyLaptop = {
  brand: "Apple",
  model: "MacBook Air 13",
  color: "Grey",
  type: "Laptop",
  owner: {
    processor: "M1",
    videocard: "Force GTX 1050 Ti",
    SSD: "2 TB",
    monitor: {
      display: "Retina",
      diagonal: "13.5 inch",
      scaling: "1440×900 px",
      brightness: "400 cd/m²",
      technology: "TrueTone",
    },
  },
  ports: "USB 4",
  camera: "FaceTime HD 720p",
};

console.log(MyLaptop);

const MySmartPhone = {
  brand: "Apple",
  model: " Iphone 14 Pro",
  color: "Black",
  owner: {
    capacity: "128 gb",
    size: "147,5x71,5x7,85 mm",
    display: "Retina OLed matrice",
    diagonal: "6.1 inch",
    novice: "Dynamic Island",
    technology: "TrueTone",
  },
  ports: "USB-C/Lightning",
  SIM: "e-Sim",
  OS: "IOS 1.7",
  camera: "Main - 48 mp, Ultra-wide-angle - 12 mp, telephoto - 12 mp",
  others: {
    sensors: "Face ID and etc",
  },
};

console.log(MySmartPhone);

const MyTable = {
  brand: "Lenovo",
  model: " IdeaPad 3.1",
  color: "Moon Light",
  owner: {
    capacity: "256 gb",
    display: "Super Amolet matrice",
    diagonal: "10.5 inch",
  },
  ports: "USB-C",
  SIM: "none-Sim",
  OS: "Android 14.0",
  camera: "Main - 12 mp",
  others: {
    sensors: "none",
  },
};

console.log(MyTable);

// Massive

const MyHome = [{MyTable}, {MyLaptop}, {MySmartPhone}];
console.log(MyHome);

// ЗВернення до певного індексу

// console.log(MyHome[2]);

// Add to end

// MyHome.push({});

// Add to start

// MyHome.unshift({});

// Deleted start row

// MyHome.shift();
