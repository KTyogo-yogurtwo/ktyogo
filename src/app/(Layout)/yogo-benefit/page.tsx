import Image from 'next/image';
import {
  yogo_benefit_1,
  yogo_benefit_10,
  yogo_benefit_11,
  yogo_benefit_12,
  yogo_benefit_2,
  yogo_benefit_3,
  yogo_benefit_4,
  yogo_benefit_5,
  yogo_benefit_6,
  yogo_benefit_7,
  yogo_benefit_8,
  yogo_benefit_9,
  yogo_logo,
} from '@/assets/images/yogo-benefit/images';
import LinkComponent from '@/components/LinkComponent';

const YogoBenefit = () => {
  return (
    <>
      <Image src={yogo_benefit_1} alt="yogo" />

      <div className="py-[8vw]">
        <Image src={yogo_benefit_2} alt="yogo" />
        {/* 요금 계산 들어갈 부분 */}
        <div className="mx-[4.5vw] my-[6vw]"></div>

        <div
          className="flex items-center px-[5vw] py-[6vw] rounded-[25px] mx-[4.5vw] justify-center"
          style={{ background: 'linear-gradient(107deg, #DFFFFC, #EBF0FF, #FFECF1)' }}
        >
          <Image src={yogo_logo} alt="요고뭉치" className="w-[28vw]" />
          <p className="text-[3.8vw]">
            <em className=" not-italic" style={{ background: 'linear-gradient(to top, #7DFFFF 40%, transparent 40%)' }}>
              인터넷, TV도
              <br /> 무약정
            </em>
            으로 결합하고 싶다면?
          </p>
        </div>

        <div className="mt-[10vw]">
          <LinkComponent />
        </div>
      </div>
      {/* 요고를 소개합니다 들어갈 부분 */}
      <div></div>
      <Image src={yogo_benefit_3} alt="yogo" />
      <Image src={yogo_benefit_4} alt="yogo" />
      <Image src={yogo_benefit_5} alt="yogo" />
      <Image src={yogo_benefit_6} alt="yogo" />
      <div className="px-[7vw] overflow-x-scroll bg-[#f1fffe] pb-[50px]">
        <Image src={yogo_benefit_7} alt="yogo" className="w-[150%] max-w-none" />
      </div>
      <Image src={yogo_benefit_8} alt="yogo" />
      <Image src={yogo_benefit_9} alt="yogo" />
      <Image src={yogo_benefit_10} alt="yogo" />
      <Image src={yogo_benefit_12} alt="yogo" />
      <Image src={yogo_benefit_11} alt="yogo" />
    </>
  );
};
export default YogoBenefit;
