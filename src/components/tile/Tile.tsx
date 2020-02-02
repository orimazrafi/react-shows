import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarRatingComponent from "react-star-rating-component";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { handleShowByIdRedux } from "../../features/shows/showsSlice";
import { UseCardHandleHook } from '../../hooks/useCardHandleHook';

export const Tile = ({ show }: any) => {
    const [handlePic, convertString] = UseCardHandleHook()
    const dispatch = useDispatch()


    return (
        <div onClick={() => dispatch(handleShowByIdRedux(show.id))}
        >

            <Link to={`show/${show.id}`} >
                <div className="card__container" role="button" data-testid="home-route" >
                    <div className="card-show">
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="295"
                                    width="210"

                                    image={handlePic(show.pic)}
                                    title="Contemplative Reptile"
                                />

                                <CardContent className="tile__text__container">
                                    <Typography gutterBottom variant="h5" className="tile__headline">
                                        {show.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        className="show-description"
                                    >
                                        {convertString(show.description)}
                                    </Typography>
                                    <small>
                                        <StarRatingComponent
                                            name="rate"
                                            starCount={10}
                                            value={Math.round(show.score) / 2}
                                        />
                                    </small>{" "}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </Link>
        </div>
    )
}