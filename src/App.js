import Heading from './Heading';
import PanImage from './PanImage';
import PanForm from './PanForm';
import './index.scss';

function App() {
  return (
    <div className="App">
      <div className="panVerifyMain">
        <Heading panTitle="PAN Verification" panPara="As per regulations, it is mandatory to verify your PAN details."/>
        <div className="panInfoMain">
          <PanImage />
          <PanForm />
        </div>
      </div>
    </div>
  );
}

export default App;
