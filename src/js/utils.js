import { LOTTO } from './constants';

export const isPositiveInteger = (payment) =>
  Number.isInteger(payment) && payment > 0;

export const divideBy = (payment, price) => payment % price === 0;

export const createRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

export const createRandomNumberList = () => {
  const randomNumberList = [];

  while (randomNumberList.length < LOTTO.LENGTH) {
    const random = createRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
    if (!randomNumberList.includes(random)) {
      randomNumberList.push(random);
    }
  }

  return randomNumberList;
};