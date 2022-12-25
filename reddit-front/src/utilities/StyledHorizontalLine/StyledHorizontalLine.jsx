export default function StyledHorizontalLine({
  marginTop, marginBottom, marginLeft, marginRight, height
}) {
  return (
    <hr
      style={{
        backgroundColor: '#1a1a1b12',
        border: 'none',
        height: `${height}px `,
        margin: `${marginTop}rem ${marginRight}rem ${marginBottom}rem ${marginLeft}rem `
      }}
    />
  );
}
