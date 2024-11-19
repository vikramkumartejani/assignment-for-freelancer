import Image from "next/image";

const Logo: React.FC = () => {
  return <Image src="/assets/logo.svg" alt="Logo" width={110} height={28} />;
};

export default Logo;
