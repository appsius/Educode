import Filters from '@/components/Filters';
import SearhcForm from '@/components/SearhcForm';
import { getResources } from '@/sanity/actions';

const Page = async () => {
  const resources = await getResources({
    query: '',
    category: '',
    page: '1',
  });

  console.log(resources);

  return (
    <main className='flex-center flex-col w-full max-w-screen-2xl paddings mx-auto'>
      <section className='nav-padding w-full'>
        <div className='flex-center flex-col relative min-h-[274px] w-full rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 text-center mb-6 text-white'>
            Educode Best Resources
          </h1>
        </div>

        <SearhcForm />
      </section>

      <Filters />
    </main>
  );
};

export default Page;
