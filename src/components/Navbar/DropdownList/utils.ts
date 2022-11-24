const convertDropdownValue = (dropdownvalue: string): string => {
  const now = 'NOW - ';
  switch (dropdownvalue) {
    case '1 día':
      return `${now}1day`;
    case '3 días':
      return `${now}3days`;
    case '10 días':
      return `${now}10days`;
    case '20 días':
      return `${now}20days`;
    case '30 días':
      return `${now}30days`;
    default:
      return `${now}1day`;
  }
};

export default convertDropdownValue;
