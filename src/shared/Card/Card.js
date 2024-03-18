

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{backgroundColor: props.backGroundColor , margin: "3px"}}>{props.content}</Card>
    </Box>
  );
}
