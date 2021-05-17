type Heroes = 'Hulk' | 'Capt' | 'Thor';
// JavaScript의 for...in과 같음
// 인터페이스와 같은 형태로 정의됨
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};
