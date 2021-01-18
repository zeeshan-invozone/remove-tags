import './App.css';
function App() {
  const handleSubmit = (inputHTML) => {
    let parser = new DOMParser().parseFromString(inputHTML, 'text/html');
    const body = parser.body.lastElementChild.children;
    for (let x = body.length - 1; x >= 0; x--) {
      if (body.item(x).innerHTML.length > 0) break;
      if (body.item(x).innerHTML.length === 0) body.item(x).remove();
    }
    const finalData = parser.body.innerHTML;
    let iframeElement = document.createElement('iframe');
    document.body.appendChild(iframeElement);
    iframeElement.contentWindow.document.open();
    iframeElement.contentWindow.document.write(finalData);
    iframeElement.contentWindow.document.close();
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
