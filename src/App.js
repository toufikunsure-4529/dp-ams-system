import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-4">We are working hard to bring you a great experience. Stay tuned!</p>
      <div className="mt-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button className="p-2 bg-blue-500 text-white rounded">Notify Me</button>
      </div>
    </div>
  </div>
  );
}

export default App;
