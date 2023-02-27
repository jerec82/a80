import { Collapse, Space, Tabs } from 'antd';
import './App.css';

const {Panel} = Collapse;

function App() {
  

  
  return (
    <div className="App">

      <Tabs 
        type='card' 
        defaultActiveKey='1'
        items={[

          {
            label: 'Форма просмотра жалоб',
            key: '1',
            children: 
            <>
            
              <Collapse>
                <Panel header="Параметры" key="1">
      
                </Panel>
                <Panel header="Результаты поиска" key="2">
      
                </Panel>
              </Collapse>

            </>

          },
          {
            label: 'Вторая форма',
            key: '2',
            children:
            <>

            </>
          },

        ]}>
          
      </Tabs>
    </div>
  );
}

export default App;
