import NavBar from '@/components/personal/header';
import TrailForm from '@/components/personal/trailform';

const NewTrail = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Adicionar Nova Trilha</h1>
        <TrailForm />
      </div>
    </div>
  );
};

export default NewTrail;
