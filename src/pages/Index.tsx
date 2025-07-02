
import Calculator from '../components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
};

export default Index;
