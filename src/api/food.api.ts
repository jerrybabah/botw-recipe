import foodData from '../data/foods.data';
import IFood from '../interfaces/food.interface';

/**
 * Mocking client-server processing
 */
const foodMockupData: IFood[] = foodData.data;

// api 구현 후 안의 내용이 바뀔 수 있음
// getFoods 함수는 필요한 인자가 없고 promise로 감싸진 IFood의 리스트를 반환한다는 것은 변하지 않음
const getFoods: () => Promise<IFood[]> = async () => foodMockupData;

export default {
  getFoods,
};
