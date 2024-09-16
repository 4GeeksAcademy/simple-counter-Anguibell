import React from "react";
import Card from "./card";
import CardClock from "./cardClock";

//create your first component
const SecondsCounter = ({seconds}) => {

	return (
		<div className="container-fluid d-flex gap-2">
			<CardClock />
			<Card number={Math.floor((seconds/100000)%10)}/>
			<Card number={Math.floor((seconds/10000)%10)}/>
			<Card number={Math.floor((seconds/1000)%10)}/>
			<Card number={Math.floor((seconds/100)%10)}/>
			<Card number={Math.floor((seconds/10)%10)}/>
			<Card number={Math.floor((seconds/1)%10)}/>
		</div>
	);
};

export default SecondsCounter;
