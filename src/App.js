import { useState } from 'react';
import './App.css';
function App() {
  const [html, setHtml] = useState('');
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    // setHtml(e.target.value);
    handleSubmit(e.target.value);
  };
  const handleSubmit = (data) => {
    const parser = new DOMParser();
    const getData = parser.parseFromString(data, 'text/html');
    const pTag = getData.querySelectorAll('p');
    pTag.forEach((ele) => {
      console.log(ele.innerHTML);
    });
    const last = pTag[pTag.length - 1];
    const lastlength = last.textContent.length;
    if (lastlength <= 0) {
      console.log('p will be removed');
      console.log(lastlength);
      last.remove();
      console.log('getdata', getData);
      const iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write('Hello world');
      iframe.contentWindow.document.close();
      console.log(iframe);
    } else {
      console.log('p do not removed');
      console.log(lastlength);
    }
  };
  return (
    <>
      <textarea
        rows='15'
        cols='100'
        placeholder='enter data here'
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>click</button>
      {/* <iframe width='33%' height='150px'>
        {show && <div>{html}</div>}
      </iframe> */}
    </>
  );
}

export default App;
