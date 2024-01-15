const codeStyles = {
  display: 'block',
  overflow: 'auto',
};

const pretty = (object) => {
  return JSON.stringify(object, null, 2);
};

export default function StoreContents({children}) {
  return <pre>
    <code style={codeStyles}>
      {pretty(children)}
    </code>
  </pre>;
}
