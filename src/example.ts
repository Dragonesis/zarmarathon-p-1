// Point 1

function concat(str1:string, str2:string): string {
  return str1 + str2
}

concat('Hello ', 'World')


// Point 2

interface WithData {
  howIDoIt: string;
  simeArray: (string | number)[];
}

interface MyHometask {
  howIDoIt: string
  simeArray: [string, string, number]
  withData: WithData[]
}

const myHometask: MyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


// Point 3

interface MyArray<T> {
	[n: number]: T;
reduce<U>(fn: (el: U, el2: T) => U, init: U): U;
}

const array: MyArray<number> = [1,2,3]
array.reduce((a, b) => a + b)
