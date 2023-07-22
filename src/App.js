import { AnimatePresence } from 'framer-motion';
import './css/App.css';
import AppHeader from './components/shared/AppHeader.jsx';
import AppFooter from './components/shared/AppFooter.jsx';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light transition duration-300">
        Hello
        <AppHeader />
        <AppFooter />
      </div>
    </AnimatePresence>
  );
}

export default App;

