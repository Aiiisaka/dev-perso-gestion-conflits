import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PeopleIcon from '@mui/icons-material/People';

export default function Errors() {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <HearingDisabledIcon />
                </ListItemIcon>
                <ListItemText primary="Manque d'écoute" secondary="Ne pas écouter l'autre partie entraîne des solutions inadaptées." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TrackChangesIcon />
                </ListItemIcon>
                <ListItemText primary="Manque de flexibilité" secondary="Ne pas être flexible conduit à des impasses et une escalade du conflit." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AttachFileIcon />
                </ListItemIcon>
                <ListItemText primary="S'attacher à une opinion" secondary="Être fermé d'esprit empêche de trouver une solution satisfaisante." />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Manque de collaboration" secondary="Privilegier ses intérêts mène à des solutions inadaptées." />
            </ListItem>
        </List>
    )
}
