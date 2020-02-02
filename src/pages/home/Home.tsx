import React from "react";
import { List } from './../../components/list/List';
import { Header } from './../../components/header/Header';


export class Home extends React.Component<any> {

    render() {
        return (
            <React.Fragment>
                <Header onChange={this.props.onChange} />
                <List
                    shows={this.props.shows}
                    querySearch={this.props.querySearch} />
            </React.Fragment>

        );
    }
}