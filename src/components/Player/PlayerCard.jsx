
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LinkMUI from '@mui/joy/Link';


export default class PlayerCard extends Component {
  render() {
    const { player } = this.props;

    return (
      <div className='outer-player-card'>
        <Card className='inner-player-card' variant="outlined">
            <CardOverflow>
                <AspectRatio>
                <img src={player.image} loading="lazy" alt={`Picutre of ${player.firstName} ${player.lastName}`}/>
                </AspectRatio>
            </CardOverflow>
                <CardContent>
                    <Typography><strong>{player.firstName} {player.lastName}</strong></Typography>
                    <Typography><em>{player.currentTeam}</em></Typography>
                </CardContent>
                    <Box alignItems="center" >
                        <Typography>{player.primaryPosition}</Typography>
                        <Typography>#{player.primaryNumber}</Typography>
                        <Typography startDecorator={<LocationOnRoundedIcon />}>{player.birthCity}, {player.nationality}</Typography>
                    </Box>
                <CardOverflow>
                    <CardActions buttonFlex="1">
                        <LinkMUI href={`https://www.capfriendly.com/players/${player.firstName}-${player.lastName}`} target='_blank' 
                        underline="none">
                            <Button className='player-card-button-text'>Salary</Button>
                        </LinkMUI>
                        <Link to={`/nhl/players/${player.id}`}>
                            <Button className='player-card-button-text'>Profile</Button>
                        </Link>
                    </CardActions>
                    <CardActions className='player-card-nhl-profile' buttonFlex="1">
                        <LinkMUI href={player.profile} target='_blank' underline="none">
                            <Button className='player-card-button-text'>NHL Profile</Button>
                        </LinkMUI>
                    </CardActions>
                </CardOverflow>
        </Card>
      </div>
    );
  };
};