import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ajustar para usar next/navigation

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para /coming-soon na montagem do componente
    router.push('/coming-soon');
  }, [router]);

  return null;
};

export default Home;
