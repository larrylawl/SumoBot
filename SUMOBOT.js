#!/usr/bin/env node
require('./node_modules/ev3_source.js');

ev3_waitForButtonPress();

const motorA = ev3_motorA();
const motorD = ev3_motorD();
const ultra_sonic = ev3_ultrasonicSensor();
const color_sense = ev3_colorSensor();
// const touch_sense_1 = ev3_touchSensor1()
// const touch_sense_2 = ev3_touchSensor2()

if (ev3_connected(motorA)) {
    display("CONNECTED A");
}

if (ev3_connected(motorD)) {
    display("CONNECTED D");
}

function pivot(distance) {
	ev3_runForDistance(motorA, distance, 1000);
	ev3_runForDistance(motorD, -distance, 1000);
	display("pivot");
}

function rotate(distance) {
	ev3_runForDistance(motorD, -distance, 1000);
	display("rotate");
}

function straight(distance) {
	ev3_runForDistance(motorA, distance, 1000);
	ev3_runForDistance(motorD, distance, 1000);
	display("straight");
}

function reverse(distance) {
	ev3_runForDistance(motorA, -distance, 1000);
	ev3_runForDistance(motorD, -distance, 1000);
	display("reverse");
}

function detect_distance() {
    return ev3_ultrasonicSensorDistance(ultra_sonic);
}

function white() {
	return (ev3_colorSensorRed(color_sense) > 150)
			&& (ev3_colorSensorBlue(color_sense) > 150)
			&& (ev3_colorSensorGreen(color_sense) > 150);
}

function attack() {
	display("attack");
	if (detect_distance() < 10) { // robot	
		display("collide robot");
		straight(10);
		return attack();
		} else if (detect_distance() < 50) { 
			if (white()) { // human
				display("attack white");
				return defend();
			} else {
				display("attack robot");
				straight(10);
				return attack()
		}
	} else { // robot not in sight
		display("attack search");
		return search(); 
	}
}

function search() {
	display("search");
	pivot(10);
	return attack();
}

function defend() {
	display("defend");
	rotate(3000);
	ev3_pause(4500);
	return attack();
}

attack();


// white: (112 76 64) (124, 119, 75) (145, 173, 94) (147, 175, 95)
// red: (116, 5, 29) (124, 5, 30) (145, 8, 29) (141 8, 29) 
// Violet: (92, 19, 30)
// Dark blue: (44, 23, 44)
// Teal: (63, 43, 96)
// Green: (48, 8, 60)
// Yellow: (154, 9, 114)
// White: (159, 9, 115)