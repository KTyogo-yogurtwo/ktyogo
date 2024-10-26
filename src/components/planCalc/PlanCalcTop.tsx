'use client';
import { add_badge, benefit_twice, checkbox, range_bg } from '@/assets/images/planCalc/images';
import { KTPlan } from '@/types/types';
import { useEffect, useState } from 'react';

interface PlanCalcTopProps {
  list: KTPlan[];
  selectedPlan: KTPlan | null;
  setSelectedPlan: React.Dispatch<React.SetStateAction<KTPlan | null>>;
}

const PlanCalcTop = ({ list, selectedPlan, setSelectedPlan }: PlanCalcTopProps) => {
  const [isMonthToggled, seMonthToggled] = useState(false); // 데이터 용량과 월정액간의 토글
  const [isYBenefit, setIsYBenefit] = useState(false); // Y덤 혜택 여부의 토글
  const [planStage, setPlanStage] = useState(1); // 요금제 단계 선택 (1 시작)

  useEffect(() => {
    setSelectedPlan(list[planStage - 1]);
  }, [planStage]);

  // 요금제 단계 변경
  const handleStageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanStage(Number(e.target.value));
  };

  const handleStagePlusBtn = () => {
    if (planStage < 13) setPlanStage((prev) => prev + 1);
  };
  const handleStageMinusBtn = () => {
    if (planStage > 1) setPlanStage((prev) => prev - 1);
  };

  return (
    <div className="bg-[#f5f5f5] rounded-[25px] px-[5.2vw] py-[7.2vw] leading-[1.2]">
      {/* 상단 타이틀 */}
      <strong className="text-[5vw] text-center block">
        Y에겐 데이터가 2배!
        <label className="text-[3.2vw] block mt-[10px] text-[#0f807b]">
          34세 이하의 Y라면? Y덤 혜택받기!{' '}
          <input type="checkbox" className="hidden" onChange={() => setIsYBenefit((prev) => !prev)} />
          <i
            className={`w-[4.2vw] h-[4.2vw] inline-block bg-no-repeat bg-[top_right] bg-[length:4.2vw] align-middle ${isYBenefit && 'bg-bottom'}`}
            style={{ backgroundImage: `url(${checkbox.src})` }}
          ></i>
        </label>
      </strong>
      {/* 용량 또는 월정액 토글 버튼 */}
      <div className="border-[#ccc] border-t py-[4vw] flex justify-center gap-[2rem] mt-[5vw] text-[4.2vw]">
        <button onClick={() => seMonthToggled(false)} className={`${isMonthToggled || 'text-[#0f807b]'}`}>
          데이터 용량
        </button>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <button
            onClick={() => seMonthToggled((prev) => !prev)}
            className={`relative w-[75px] h-[30px] rounded-[30px] bg-[#0f807b] text-[0]
        after:w-[22px] after:h-[22px] after:bg-white after:content-[''] 
        after:block after:rounded-full after:absolute after:top-[4px] 
        after:left-[4px] after:transition-transform after:duration-500 
        ${isMonthToggled ? 'after:translate-x-[45px]' : ''}`}
          >
            스위치
          </button>
        </label>

        <button onClick={() => seMonthToggled(true)} className={`${isMonthToggled && 'text-[#0f807b]'}`}>
          월정액
        </button>
      </div>
      {/* 단계 조정 */}
      <div>
        <div className="flex justify-between items-center pt-[5vw] pb-[4vw] border-[#ccc] border-t px-[4vw]">
          <button
            onClick={handleStageMinusBtn}
            className="w-[8vw] h-[8vw] border-[#0f807b] rounded-[50%] border-2 text-[7vw] bg-white flex items-center justify-center"
          >
            -
          </button>
          {/* 데이터 또는 금액 */}
          <div className="text-[5.6vw]">
            {isMonthToggled ? (
              <>{selectedPlan?.monthly_fee}</>
            ) : (
              <>
                <span>{selectedPlan?.data.total_data}</span>
                {planStage < 5 && (
                  <>
                    <span>+</span>
                    <em
                      className="text-[#fe2e36] not-italic pr-[9vw] bg-no-repeat bg-right-bottom"
                      style={{ backgroundImage: `url(${add_badge.src})`, backgroundSize: '8vw' }}
                    >
                      5GB
                      <i className=""></i>
                    </em>
                  </>
                )}
                {planStage < 9 && planStage > 4 && (
                  <>
                    <span>+</span>
                    <em
                      className="text-[#fe2e36] not-italic pr-[9vw] bg-no-repeat bg-right-bottom"
                      style={{ backgroundImage: `url(${add_badge.src})`, backgroundSize: '8vw' }}
                    >
                      {selectedPlan?.data.total_data}
                    </em>
                  </>
                )}
              </>
            )}
          </div>
          <button
            onClick={handleStagePlusBtn}
            className="w-[8vw] h-[8vw] border-[#0f807b] rounded-[50%] border-2 text-[7vw] bg-white items-center justify-center"
          >
            +
          </button>
        </div>
        {/* range바 */}
        <div className="relative ">
          <div
            className=" w-full h-[12vw] bg-cover absolute top-0 z-10"
            style={{
              backgroundImage: `url(${range_bg.src})`,
            }}
          ></div>
          <div className="px-[4vw] py-[1.5vw] h-[10.5vw] pb-[1vw]">
            <div
              className="block h-full bg-gradient-to-r from-[#69f1fa] to-[#0dd9d3] transform skew-x-[-15deg]"
              style={{ width: `calc(${(planStage / list.length) * 100}%)` }}
            ></div>
          </div>
          <input
            type="range"
            step="1"
            max={list.length}
            min="1"
            value={planStage}
            onChange={handleStageChange}
            className="opacity-0 absolute top-[50%] translate-y-[-50%] left-[4vw] z-10 h-[10.5vw]"
            style={{ width: 'calc(100% - 8vw)' }}
          />
        </div>
        <div className="text-[3.4vw] flex justify-between m-[5px] pt-[10px] relative after:content-[''] after:absolute after:w-[1px] after:h-[10px] after:bg-[#ccc] after:top-0 after:left-1/2">
          {isMonthToggled ? (
            <>
              <span>3만</span>
              <span>4만2천</span>
              <span>6만9천</span>
            </>
          ) : isYBenefit ? (
            <>
              <div className={'text-center relative'}>
                <del>5GB</del>
                <span className="font-bold block">10GB</span>
                <i
                  className="absolute w-[7vw] h-[4.8vw] top-[1.2vw] right-[-7vw] bg-contain"
                  style={{ backgroundImage: `url(${benefit_twice.src})` }}
                ></i>
              </div>
              <div className={'text-center relative'}>
                <del>35GB</del>
                <span className="font-bold block">70GB</span>
                <i
                  className="absolute w-[7vw] h-[4.8vw] top-[1.2vw] right-[-7vw] bg-contain"
                  style={{ backgroundImage: `url(${benefit_twice.src})` }}
                ></i>
              </div>
              <span className="font-bold block">무제한</span>
            </>
          ) : (
            <>
              <span className="font-bold block">5GB</span>
              <span className="font-bold block">35GB</span>
              <span className="font-bold block">무제한</span>
            </>
          )}
        </div>
      </div>
      {/* 하단 혜택 내용 텍스트 */}
      <div className="bg-[#e0f4ff] text-[3vw] text-center px-[10px] py-[5px] mt-[2.5vw]">
        ※ 출시 기념 추가데이터 30GB가 12개월간 제공됩니다.
      </div>
    </div>
  );
};
export default PlanCalcTop;
