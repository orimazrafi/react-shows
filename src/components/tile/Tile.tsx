import * as React from "react";
import { defaultPic } from "../../helpers/show";
import StarRatingComponent from "react-star-rating-component";
// import { useHistory } from "react-router-dom";

export class Tile extends React.Component<any> {
    convertString(xmlString: string): string {
        const temporalDivElement: HTMLDivElement = document.createElement("div");
        temporalDivElement.innerHTML = xmlString;
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }
    //   const history = useHistory();
    handlePic(pic: string): string {
        return pic ? pic : defaultPic;
    }
    //   function handleClick(id: string) {
    //     history.push({
    //       pathname: `/show/${id}`
    //     });
    //   }

    render() {
        return (<div
            className="card tile"
            data-testid="tile"
            role="button"
        >
            <img
                src={this.handlePic(this.props.pic)}
                alt="movie img"
                height="170"
                className="card-img-top"
                width="auto"
            />
            <span className="card-title tile-headline">{this.props.title}</span>
            <div className="description card-text">{this.convertString(this.props.description)}</div>
            <small>
                <StarRatingComponent
                    name="rate"
                    starCount={10}
                    value={Math.round(this.props.score) / 2}
                />
            </small>{" "}
        </div>)
    }


}

