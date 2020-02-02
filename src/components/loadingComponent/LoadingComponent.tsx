import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: auto;
  border-color: blue;
`;
export const LoadingComponent = ({ loading }: any) => {

    return (

        <div style={{ display: "flex", height: '250px' }}>
            <ClipLoader

                css={override}
                size={150}
                color={"#123abc"}
                loading={loading}
            />
        </div>
    )
}

