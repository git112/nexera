import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import WorkflowBuilder from "@/components/WorkflowBuilder";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'workflow'>('landing');

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  if (currentView === 'workflow') {
    return <WorkflowBuilder />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Demo Navigation */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="glass-card p-4 space-y-2">
          <p className="text-xs text-muted-foreground mb-2">Demo Navigation:</p>
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="block w-full text-left text-sm px-3 py-1 rounded hover:bg-primary/10 transition-colors"
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('workflow')}
            className="block w-full text-left text-sm px-3 py-1 rounded hover:bg-primary/10 transition-colors"
          >
            Workflow Builder
          </button>
          <button 
            onClick={() => setCurrentView('landing')}
            className="block w-full text-left text-sm px-3 py-1 rounded hover:bg-primary/10 transition-colors"
          >
            Landing Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
