import Search from './components/Search';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '48px', background: '#f6f8fa' }}>
      <div style={{ width: '100%', maxWidth: 800 }}>
        <h1 style={{ textAlign: 'center' }}>GitHub User Search</h1>
        <Search />
      </div>
    </div>
  );
}
