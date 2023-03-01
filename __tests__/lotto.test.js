import { MINIMUM_LOTTO_UNIT } from '../src/data/Constants';
import Lotto from '../src/domain/Lotto';

test('로또 객체 생성', () => {
  // given
  const lottoCount = 8;

  // when
  const lottos = Array.from({ length: lottoCount }, () => new Lotto());

  // then
  lottos.forEach((lotto) => expect(lotto).toBeInstanceOf(Lotto));
});
