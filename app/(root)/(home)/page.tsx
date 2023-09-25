import Filters from '@/components/Filters';
import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard';
import SearhcForm from '@/components/SearhcForm';
import { getResources, getResourcesPlaylist } from '@/sanity/actions';

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  const resourcesPlaylist = await getResourcesPlaylist();

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

      {(searchParams?.query || searchParams?.category) && (
        <section className='flex-center flex-col w-full mt-6 sm:mt-20'>
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className='flex flex-wrap justify-center mt-12 w-full gap-16 sm:justify-start'>
            {resources.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  id={resource._id}
                  title={resource.title}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className='body-regular text-white-400'>No resouce found</p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist.map((item: any) => (
        <section
          key={item._id}
          className='flex-center flex-col w-full mt-6 sm:mt-20'
        >
          <h1 className='heading3 self-start text-white-800'>{item.title}</h1>
          <div className='flex justify-center flex-wrap w-full mt-12 sm:justify-start gap-16'>
            {item.resources.length > 0 ? (
              item.resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  id={resource._id}
                  title={resource.title}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className='body-regular text-white-400'>
                No playlist resouce found
              </p>
            )}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
