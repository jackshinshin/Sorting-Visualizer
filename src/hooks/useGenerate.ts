import { useEffect, useState } from "react";
import { sortingStateActions } from "../store/sorting-slice";
import { useTypedDispatch } from "./typed-store-hooks";

type form = {
  size: number;
  algorithm: string;
  min: number;
  max: number;
};
const useGenerate = (formState: form) => {
  const [arr, setArr] = useState<number[]>([]);
  const [colorCode, setColorCode] = useState<number[]>(
    Array(formState.size).fill(0)
  );
  const dispatch = useTypedDispatch();
  const generate = () => {
    let tmp: number[] = [];
    let min = 2e9,
      max = -1;

    setColorCode(Array(formState.size).fill(0));
    while (tmp.length < formState.size) {
      const random = Math.floor(
        Math.random() * (formState.max - formState.min) + formState.min
      );
      if (tmp.indexOf(random) === -1) {
        tmp.push(random);
        min = random < min ? random : min;
        max = random > max ? random : max;
      }
    }
    setArr(tmp);
    dispatch(sortingStateActions.updateSelectedMinMax({ min: min, max: max }));
  };

  useEffect(() => {
    generate();
  }, []);
  return {
    generateArr: generate,
    arr,
    setArr,
    colorCode,
    setColorCode,
  };
};

export default useGenerate;
