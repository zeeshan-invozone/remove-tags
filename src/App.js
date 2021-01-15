import './App.css';
function App() {
  const handleSubmit = (data) => {
    const parser = new DOMParser();
    const getData = parser.parseFromString(data, 'text/html');
    const pTag = getData.querySelectorAll('p');
    pTag.forEach((ele) => {
      console.log(ele.innerHTML);
    });
    const last = pTag[pTag.length - 1];
    const lastlength = last.textContent.length;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('height', '300px');
    iframe.setAttribute('width', '600px');
    document.body.appendChild(iframe);
    const res = getData.body.textContent;
    if (lastlength <= 0) {
      console.log('p will be removed');
      console.log(lastlength);
      last.remove();
      console.log('getdata', getData.body.innerHTML);
      console.log('res', res);
      // document.body = getData.body;
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(res);
      iframe.contentWindow.document.close();
      console.log(iframe);
    } else {
      console.log('res', res);
      console.log('p do not removed');
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(res);
      iframe.contentWindow.document.close();
      console.log(lastlength);
    }
  };
  return (
    <>
      <textarea
        rows='15'
        cols='100'
        placeholder='enter data here'
        onChange={(e) => handleSubmit(e.target.value)}
      />
    </>
  );
}

export default App;
