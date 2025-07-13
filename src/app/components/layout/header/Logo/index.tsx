import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/osslogo.png"
                alt="logo"
                width={117}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
            />
        </Link>
    );
};

export default Logo;