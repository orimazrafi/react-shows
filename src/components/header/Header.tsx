
import React from "react";
import { useRefHook } from '../../hooks/useRefHook';
import { useSelector, useDispatch } from "react-redux"
import { handleShowsRedux } from './../../redux/actions';
import { StoreInterface } from "../../interfaces";
export const Header = () => {

    const dispatch = useDispatch()
    const { text } = useSelector((state: StoreInterface) => state)
    const [textRef] = useRefHook()
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(handleShowsRedux(e.currentTarget.value))
    }
    return (
        <div className="input__container" id="aggregate_7aa" >
            <input
                type="text"
                ref={textRef}
                placeholder="Search..."
                className="form-control"
                name="query"
                value={text}
                onChange={handleChange}
            />
        </div>
    )
}