import React, {Component} from "react";
import "./Bungie.css";

export default class Bungie extends Component {
    render() {
        return (
            <div>
                <iframe src="https://www.bungie.net" className='bungie' title="bungie"></iframe>
            </div>
        );
    }
}