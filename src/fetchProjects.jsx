import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'ixxveqkk74yl',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: 'projects' });

      const ans = res.items.map((item) => {
        const { image: image_url, title, url } = item.fields;
        const { id } = item.sys;
        const image = image_url?.fields?.file?.url;

        return { title, url, image, id };
      });

      setProjects(ans);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
