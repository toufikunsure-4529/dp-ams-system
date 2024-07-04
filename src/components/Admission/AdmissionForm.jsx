import React from 'react';
import Container from "../container/Container";

function ComingSoonPage() {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-4xl mx-auto px-5 py-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
          <p className="text-lg text-gray-600 mb-8">We are working hard to bring you something amazing.</p>
        </div>
      </Container>
    </div>
  );
}

export default ComingSoonPage;
