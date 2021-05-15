/* Utility - Pick */
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product> {
  return new Promise<Product>((resolve) => {});
}

// 2. 특정 상품의 상세 정보를 불러오는 API 함수 : 특정 속성만 가져오는 경우 interface 전체의 속성을 필요로 하지 않는다.
// Product !== {id, name, price}
// function displayProductDetail(shoppingItem: {
//   id: number;
//   name: string;
//   price: number;
// }) {}

// 두 가지 방법 1: 인터페이스 분리
// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
// function displayProductDetail(shoppingItem: ProductDetail) {}

// 두 가지 방법 2: 유틸리티 타입 - Pick
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: ShoppingItem) {}

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// interface UpdateProduct {
//   id?: number;   // ? 는 Optional로 any와 비슷하다. 있어도 그만, 없어도 그만.
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
// function updateProductItem(productItem: UpdateProduct) {}
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {} // 동일한 결과

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1 첫번째 시도 - 옵셔널 사용, interface가 가지고 있는 각각의 키-밸류값을 가져온다.
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

// #2 두번째 시도 - 축약형 : 인덱스 오브 시그니쳐를 사용한다.
// type UserProfileUpdate = {
//   // for...in과 동일한 반복문으로 Mapped Type이라고도 함
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]; // Partial 처럼 동작하게 구현한 것이지, Partial이 아님
// };
// type UserProfileKeys = keyof UserProfile;    // p in ...과 동일한 형태임

// #3 세번째 시도 - keyof 구문으로 변경하기
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]; // 기존 선언한 타입에 대해서만 강제성을 가짐
};

// #4 네번째 시도 - Partial 형태
type Subset<T> = {
  [p in keyof T]?: T[p]; // 제네릭으로 넘겨주는 타입에 따라 유동적일 수 있음. 이게 Partial임
};
