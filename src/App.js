import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
    {
        title: "What is React?",
        content: "React is a front end js framework"
    },
    {
        title: "Why use React?",
        content: "React is a favourite among engg."
    },
    {
        title: "How do you use React?",
        content: "Use React by creating components"
    }
];

const options = [
    {label:"Color Red",value:"red"},
    {label:"Color Green",value:"green"},
    {label:"Color Blue",value:"blue"},
];

export default ()=>{
    const [selected , setSelected] = useState(options[0]);

    return (
        <div>
          <Header />
          <Route path="/">
            <Accordion items={items} />
          </Route>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Dropdown
              label="Select a color"
              options={options}
              selected={selected}
              onSelectionChange={setSelected}
            />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </div>
      );
}