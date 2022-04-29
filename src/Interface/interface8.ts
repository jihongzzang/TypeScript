//function 을 만드는 두가지 방법

//type alias
type EatType = (food: string) => void;

//interface
interface IEat {
  (food: string): void;
}

//Array를 만드는 두가지 방법

//type alias
type PersonList = string[];

//interface
interface IPersonList {
  [index: number]: string;
}

//intersection

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artist: { name: string }[];
}

//type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;
let art: ArtistsResponseType;

//interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}
let iar: IArtistsResponse;

//uniontype

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// interface IPet extends PetType {}

// class Pet implements PetType {}

//Declaration Merging - interface

interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface; //인터페이스에선 declarationMerging 이 가능

type MergingType {
  a: string;
}

type MergingType {
  b: string;
} //type의 경우 declarationMerging머징이 안됨

//기본적으로 타입별칭의 경우 어떤 타입을 부르는 이름을 말한다. interface는 새로운 타입을 만들어내는거라고 생각하자