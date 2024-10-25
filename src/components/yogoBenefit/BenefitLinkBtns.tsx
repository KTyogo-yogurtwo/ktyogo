import { benefit_links } from '@/assets/images/yogoBenefit/images';
import Link from 'next/link';

interface BenefitLinkBtnsProps {
  className: string;
}

const BenefitLinkBtns = ({ className }: BenefitLinkBtnsProps) => {
  return (
    <div className={`${className} flex w-[100vw] h-[14.8vw]`}>
      <Link
        href="#link1"
        className="flex-1 text-center text-[0px]"
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: '0 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        초이스 플러스
      </Link>
      <Link
        href="#link2"
        className="flex-1 text-center text-[0px]"
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: '33.3% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        데이터 추가 혜택
      </Link>
      <Link
        href="#link3"
        className="flex-1 text-center text-[0px]"
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: '66.6% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        멤버십 프로모션
      </Link>
      <Link
        href="#link4"
        className="flex-1 text-center text-[0px]"
        style={{
          backgroundImage: `url(${benefit_links.src})`,
          backgroundSize: '400% auto',
          backgroundPosition: '100% 0',
          backgroundRepeat: 'no-repeat',
        }}
      >
        KT 쿠폰팩 혜택
      </Link>
    </div>
  );
};
export default BenefitLinkBtns;
