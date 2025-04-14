import { LatestNews, NewsByFilters } from '@/components';
import s from './Main.module.css'
import 'react-loading-skeleton/dist/skeleton.css';

export const Main = () => {

  // if(isLoading || isFetching) {
  //   return (
  //     <>
  //       <div style={{ display: 'flex', alignItems: 'center',  marginBottom: '1rem',gap: '1rem' }}>
  //         {[...Array(20)].map((_, index) => (
  //           <Skeleton key={index} height={25} width={65} style={{ borderRadius: '1rem' }}/>
  //         ))}  {/* Скелет для Categories*/}
  //       </div>
  //       <main>
  //         <Skeleton count={1} height={300} style={{marginBottom: '1rem'}} /> {/* Скелет для NewsBanner */}
  //         <Skeleton count={8} height={50} style={{marginTop: '1rem'}} /> {/* Скелет для NewsList */}
  //       </main>
  //     </>
  //   )
  // }

  return (
    <main className={s.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  )
}
