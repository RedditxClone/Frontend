export default function StyledHorizontalLine({
  marginTop, marginBottom, marginLeft, marginRight
}) {
  return (
    <hr
      style={{
        backgroundColor: '#1a1a1b12',
        border: 'none',
        height: '1px',
        margin: `${marginTop}rem ${marginRight}rem ${marginBottom}rem ${marginLeft}rem `
      }}
    />
  );
}
