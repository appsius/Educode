import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <main className='flex-center flex-col paddings mx-auto w-full max-w-screen-2xl'>
      <section className='nav-padding w-full'>
        <Skeleton className='bg-red-600 h-[274px] w-full rounded-lg' />
      </section>

      <section className='flex flex-col mt-6 w-full sm:mt-20'>
        <Skeleton className='bg-red-600 h-10 w-56' />
        <div className='flex flex-wrap justify-center mt-12 w-full gap-16 sm:justify-start'>
          <Skeleton className='bg-red-600 h-[440px] w-full sm:h-[356px]' />
          <Skeleton className='bg-red-600 h-[440px] w-full sm:h-[356px]' />
          <Skeleton className='bg-red-600 h-[440px] w-full sm:h-[356px]' />
        </div>
      </section>
    </main>
  );
};

export default Loading;
