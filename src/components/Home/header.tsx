import Image from 'next/image'
import LocaleSwitcher from '../LocaleSwitcher'
import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('Header')

  return (
    <div>
      <div className=" fixed top-4 right-8  z-50">
        <LocaleSwitcher />
      </div>

      <div className='flex w-full  justify-center items-start m-0'>
        <Image
          src="/croos2.png"
          alt={t('holyCelebrationAlt')}
          width={60}
          height={120}
          className='m-0 p-0'
        />
      </div>  
      <h1 className="church-name">{t('churchName')}</h1>
      <h2 className="church-subname">{t('churchSubname')}</h2>
      <h2 className="page-title">{t('pageTitle')}</h2>
    </div>
  )
}

export default Header
