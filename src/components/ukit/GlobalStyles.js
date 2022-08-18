import GlobalStyles from '@mui/material/GlobalStyles';
const StyledGlobalStyles = ({ condition }) => {
  return (
    <>
      {condition && (
        <GlobalStyles
          styles={(t) => ({
            body: { background: 'red' },
          })}
        />
      )}
    </>
  );
};

export default StyledGlobalStyles;
