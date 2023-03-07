import { useState } from 'react'

import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }: any) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Tool(props: any) {
    const { img, tool, subheader, description, example } = props.value;

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, minHeight: 400 }}>
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt={tool}
                title={tool}
            />
            <CardHeader
                title={tool}
                subheader={subheader}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 125 }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><Box sx={{ fontWeight: 'bold' }}>
                        Exemple : <br />
                    </Box>
                        {example}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}