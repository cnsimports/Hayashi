export const Menu = ({ width, height, stroke = 'currentColor', className }) => (
  <svg className={className} fill="none" width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16">
    <line y1="1" x2="19" y2="1" stroke={stroke}/>
    <line y1="8" x2="25" y2="8" stroke={stroke}/>
    <line y1="15" x2="19" y2="15" stroke={stroke}/>
  </svg>
)