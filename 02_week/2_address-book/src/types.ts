interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// 추가
enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { Contact, PhoneType };
