import { stateType } from "../store/sorting-slice";
import { compared, comparing, swap } from "../utility/sorting-helpers";
import useGenerate from "./useGenerate";

export const useSort = (formState: stateType, time: number) => {
  const { generateArr, arr, setArr, colorCode, setColorCode } =
    useGenerate(formState);
  let sortingFn = () => {};

  function bubble() {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let count = 0;
      setTimeout(() => {
        for (let j = 0; j < len - i - 1; j++) {
          setTimeout(() => {
            count += 1;
            comparing(colorCode, setColorCode, j, j + 1);
          }, time);
          if (arr[j] > arr[j + 1]) {
            setTimeout(() => {
              count += 1;
              setArr(swap(arr, j, j + 1));
            }, time);
          }
          compared(colorCode, setColorCode, j, j + 1);
        }
      }, time * count);
    }
    // console.log(arr);
  }
  switch (formState.algorithm) {
    case "bubble":
      sortingFn = bubble;
      break;
  }

  return {
    sort: sortingFn,
    arr,
    generateArr,
    colorCode,
  };
};
