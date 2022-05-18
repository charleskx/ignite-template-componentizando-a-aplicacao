import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { SelectedGenreProvider } from './context/SelectedGenreContext';

import './styles/global.scss';

export function App() {

  return (
    <SelectedGenreProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </SelectedGenreProvider>
  )
}
