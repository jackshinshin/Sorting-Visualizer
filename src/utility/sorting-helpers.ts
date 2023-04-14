export const swap = (arr: number[], i1: number, i2: number) => {
  let tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
  console.log(arr);
  return arr;
};

export const comparing = (
  colorCode: number[],
  setColorCode: React.Dispatch<React.SetStateAction<number[]>>,
  i1: number,
  i2: number
) => {
  colorCode[i1] = 1;
  colorCode[i2] = 1;
  setColorCode([...colorCode]);
};

export const compared = (
  colorCode: number[],
  setColorCode: React.Dispatch<React.SetStateAction<number[]>>,
  i1: number,
  i2: number
) => {
  colorCode[i1] = 0;
  colorCode[i2] = 0;
  setColorCode([...colorCode]);
};
