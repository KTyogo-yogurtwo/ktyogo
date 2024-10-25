'use client';
import {
  yogo_benefit_4,
  yogo_benefit_5,
  yogo_benefit_6,
  yogo_benefit_7,
  yogo_benefit_8,
  yogo_benefit_9,
} from '@/assets/images/yogoBenefit/images';
import Image from 'next/image';
import BenefitLinkBtns from './BenefitLinkBtns';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const BenefitLinkMove = () => {
  const [isStickyVisible, setStickyVisible] = useState(false); // 링크버튼이 보여지는 여부
  const sectionRef = useRef(null); // 링크버튼이 보여지는 요소

  // 스크롤 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.15,
      },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 스크롤시 나타나는 링크 버튼 */}
      <BenefitLinkBtns
        className={`fixed top-[20px] z-[99] transition-all duration-500 ${
          isStickyVisible ? 'translate-y-[35px] opacity-100' : '-translate-y-[100] opacity-0'
        }`}
      />

      <div className="relative">
        <Image src={yogo_benefit_4} alt="yogo" className="w-[100%]" />
        <Link href="#link1" className="w-[37.33%] h-[27.38%] block absolute top-[25%] left-[10%] text-[0px]">
          초이스 플러스
        </Link>
        <Link href="#link2" className="w-[37.33%] h-[27.38%] block absolute top-[25%] right-[10%] text-[0px]">
          데이터 추가 혜택
        </Link>
        <Link href="#link3" className="w-[37.33%] h-[27.38%] block absolute top-[59%] left-[10%] text-[0px]">
          멤버십 프로모션
        </Link>
        <Link href="#link4" className="w-[37.33%] h-[27.38%] block absolute top-[59%] right-[10%] text-[0px]">
          KT 쿠폰팩 혜택
        </Link>
      </div>

      {/* 링크 버튼이 나타나는 부분 */}
      <div ref={sectionRef}>
        <div className="relative" id="link1">
          <Image src={yogo_benefit_5} alt="더욱 강력해진 시즌2" className="w-[100%]" />
          <Link
            className="block absolute top-[81%] left-[10%] w-[80%] h-[5%] text-[0px]"
            href="https://m.product.kt.com/mDic/productDetail.do?ItemCode=1567&benefit=season2"
          >
            혜택 자세히 보기
          </Link>
        </div>

        <Image src={yogo_benefit_6} alt="잍이터가 최대 3배" id="link2" className="w-[100%]" />
        <div className="px-[7vw] overflow-x-scroll bg-[#f1fffe] pb-[50px]">
          <Image src={yogo_benefit_7} alt="yogo" className="w-[150%] max-w-none" />
        </div>
        <Image src={yogo_benefit_8} alt="요고 멤버쉽 혜택" id="link3" className="w-[100%]" />
        <Image src={yogo_benefit_9} alt="쿠폰팩 혜택" id="link4" className="w-[100%]" />
      </div>
    </>
  );
};

export default BenefitLinkMove;
