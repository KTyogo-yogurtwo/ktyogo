import Link from 'next/link';

interface Type {
  text: string;
  link: string;
  on?: boolean;
}

const HeaderLinkBtn = ({ text, link, on = false }: Type) => {
  return (
    <Link
      href={link}
      className={`text-[13px] inline-block rounded-[31px] leading-[31px] px-[10px] border flex-none 
      ${on ? 'border-[#01A69F] text-[#01A69F]' : 'border-[#d9d9d9]'}`}
    >
      {text}
    </Link>
  );
};
export default HeaderLinkBtn;