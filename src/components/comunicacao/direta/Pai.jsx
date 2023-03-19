import React from "react";
import Filho from './Filho';


export default props =>
    <div>
        <Filho {...props}><strong>Aurora</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Noah</Filho>
        <Filho sobrenome="Wagmaker">Abel</Filho>
    </div>