import logo from './logo.svg';
import './App.css';
import RemoteContent from './components/RemoteContent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" width={200}/>

                <div>
                    <RemoteContent/>
                </div>

            </header>
        </div>
    );
}

export default App;
