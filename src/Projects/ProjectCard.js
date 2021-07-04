import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const url = "https://www.gstatic.com/webp/gallery/3.jpg"

class ProjectCard extends Component {

    appClickListner =()=>{
        window.open(this.props.appLink,'_blank')
    }

    gitClickListner = ()=>{
           window.open(this.props.gitLink,'_blank')
    }
    

    cardClickListner = ()=>{

    }

    render() {
        return (
            <div className="cardWrapping">
                <Card className="root">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Project Preview"
                            height="140"
                            image={this.props.urlImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                           <div className="themeText">
                           <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                           </div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.discription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                       { this.props.appLink != "" ? (<Button onClick={this.appClickListner} size="small" color="primary">
                            App
                        </Button>) : <div/>}

                        {this.props.gitLink!="" ? (<Button  onClick={this.gitClickListner} size="small" color="primary">
                            GitHub
                        </Button>) : <div/>}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;