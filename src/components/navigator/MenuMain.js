import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MenuMain() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button key="Home">
        <ListItemIcon>
          <HomeIcon></HomeIcon>
        </ListItemIcon>
        <ListItemText primary="Home"></ListItemText>
      </ListItem>

      <ListItem button key="Nova">
        <ListItemIcon>
          <AddIcon></AddIcon>
        </ListItemIcon>
        <ListItemText primary="Nova"></ListItemText>
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Minhas" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Rascunhos" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DoneIcon />
            </ListItemIcon>
            <ListItemText primary="Em Análise" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DoneAllIcon />
            </ListItemIcon>
            <ListItemText primary="Encerradas" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
