import { Text, Wrapper, WrapperArea } from '@/app/theme/sharedStyles';
import { SmallCard } from '@/components/SmallCard';
import { IUser } from '@/services/interfaces/User';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AsideContainer, RightAlign } from './style';

export const Aside = () => {
  const [userInfo, setUserInfo] = useState<IUser[]>();

  useEffect(() => {
    const recentProfiles = JSON.parse(
      localStorage.getItem('recentProfiles') || '[]'
    );
    setUserInfo(recentProfiles);
  }, []);

  return (
    <AsideContainer>
      <WrapperArea>
        <RightAlign>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={159}
              height={43}
              alt="Logo da ClickSoft"
            />
          </Link>
        </RightAlign>
        <Wrapper $biggerGap>
          <Text>Pesquisas Recentes:</Text>
          {userInfo?.map((user: IUser) => (
            <SmallCard key={user.login} userInfo={user} />
          ))}
        </Wrapper>
      </WrapperArea>
    </AsideContainer>
  );
};
