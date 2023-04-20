import useData from './useData';
interface PlatformForMenu {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useData<PlatformForMenu>('/platforms/lists/parents');
};

export default usePlatforms;
