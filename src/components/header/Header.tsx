import React from "react";


export class Header extends React.Component<any> {
    searchText = React.createRef<HTMLInputElement>();
    state = {
        textInput: ""
    };
    componentDidMount() {
        this.searchText.current?.focus();
    }

    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                        ref={this.searchText}
                        onChange={({ currentTarget }): any => {
                            this.props.onChange(currentTarget.value);
                        }}
                    />
                </div>
            </div>
        );
    }
}

