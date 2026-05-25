// complex data types

const var1: string = "Hello";
// union "|"

let var2: string | number = 5;
var2 = "Bye";

// object definition (declaration)

let user: {
  name: string;
  age: number;
  desc?: string;
} = {
  name: "Alice",
  age: 30,
};
console.log(user);

// 2.Using type
type ProductType = {
  id: number;
  price: number;
};

const p1: ProductType = {
  id: 1,
  price: 100,
};
console.log(p1);

// 3.using interface
interface UserInterface {
  name: string;
  age: number;
  isActive?: boolean;
}

const stu1: UserInterface = {
  name: "Rijan",
  age: 22,
  isActive: false,
};

// 4. class and object
class UserClass {
  private name?: string;
  age?: number;
  constructor(name: string = "Default", age: number = 0) {
    ((this.name = name), (this.age = age));
  }
}

const u2: UserClass = new UserClass("sham", 25);
console.log(u2, u2.age);

class Employee extends UserClass {
  empId: number;
  constructor(name: string, age: number, empId: number) {
    super(name, age);
    this.empId = empId;
  }
}

const emp1: Employee = new Employee("ram", 25, 101);
console.log(emp1);

// polymorphism
const emp2: UserClass = new Employee("Bob", 25, 102);
console.log(emp2);

//abstraction
interface IShape {
  area(): number;
}

class Circle implements IShape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

type ComplexDataType = {
  user: Employee;
  detail: UserInterface;
  product: ProductType;
  circle: Circle;
};
// task fill this data variable with appropriate values

let data: ComplexDataType = {
  user: new Employee("bob", 25, 101),
  circle: new Circle(10),
  product: {
    id: 101,
    price: 200,
  },
  detail: {
    name: "Rijan",
    age: 25,
    isActive: true,
  },
};

console.log(data.circle.area());

type UDetail = { name: string };
type UInfo = { age: number };

// union and intersection
type DType = UDetail | UInfo; //union -either
let dt1: DType = { name: "Eve" };
let dt2: DType = { age: 22 };
console.log(dt1, dt2);

type IType = UDetail & UInfo; //intersection - both
let it1: IType = { name: "Frank", age: 22 };
console.log(it1);

// Generic function - Type injection
function identify<T>(arg: T): T {
  // T is a placeholder
  return arg;
}

const id1: number = identify<number>(5);
const id2: string = identify<string>("hello");
console.log(id1, id2);

interface IApiResponse<T> {
  status: number;
  data: T;
  success: boolean;
}

type UserData = { id: number; name: string };
type ProductData = {
  id: number;
  price: number;
};

const response1: IApiResponse<UserData> = {
  status: 200,
  data: { id: 1, name: "Alice" },
  success: true,
};

const response2: IApiResponse<ProductData> = {
  status: 200,
  data: { id: 101, price: 200 },
  success: true,
};
console.log(response1, response2);

type GeneralType = {
  id: number;
  createdAt: Date;
  title: string;
  active?: boolean;
};

type PartialType = Partial<GeneralType>; //all properties are optional
type RequiredType = Required<GeneralType>; //all properties are required
type ReadonlyType = Readonly<GeneralType>;
type PickType = Pick<GeneralType, "id" | "title">; //only id and title
type OmitType = Omit<GeneralType, "createdAt">; //all except createdAt

const partialObj: PartialType = { id: 1 };
const pickObj: PickType = { id: 20, title: "unknown" };
console.log(partialObj, pickObj);

// task
const userData:
  | Partial<Omit<GeneralType, "createdAt">>
  | Required<Pick<GeneralType, "title" | "active">> = {
  // fill the user data
  title: "Unknown",
  active: true,
};

console.log(userData);
const userData2: Pick<GeneralType, "title" | "id"> & { type: string } & {
  empId: string | number;
} = {
  // fill the user data
  id: 10,
  title: "unknown",
  type: "no type",
  empId: 1001,
};

console.log(userData2);
