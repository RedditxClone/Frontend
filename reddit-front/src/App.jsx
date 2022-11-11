import AppBarReddit from './components/Layout/AppBar/AppBar';
import BackTop from './components/BackToTop/BackToTop';
// import ActionAreaCard from './components/Test/Test';
import ActionMessage from './components/ActionMessage/ActionMessage';

function App() {
  return (
    <div>
      <AppBarReddit topid="navbar" />
      {/* <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard /> */}
      <ActionMessage
        show="true"
        message="Changes Saved"
      />
      <BackTop id="navbar" />
    </div>
  );
}

export default App;
