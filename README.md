*SUMOBOT*

**RULES**
***SUMOBOT Design***
1. 45x45

***Event Sequence***
1. Group Stage
	- 5 games/match, 2 games > win (2 points)
	- Top the group --> Proceed to playoffs
2. Semi Final - 7 games/ match, 3 games > win
3. Final - 9 games/ match

**Starting orientation**
	-Robots facing each other
		-Parallel
		-Facing away

**Interesting Functions**

`ev3_motorSetStopAction(motor, stopAction)`
- coast: freely coast to a stop
- break: Power will be removed and a passive electric load will be placed
- hold: If external force tries to turn the motor, motor will "push back"

`ev3_playSequence(beeps)`: SOS LOLOLOL

**Ideas**
Source: https://www.ironreignrobotics.com/2016-04-12-sumo-tips/
Interesting ideas: https://www.youtube.com/watch?v=3tguWcKTXQI

***BASICS***
1. Abstract useful functions out
	- Straight
	- Reverse
	- 90D Right Turn (pivot)
	- 90D Left Turn (pivot)

2. Stay on the field
	- 2 light sensors placed at the front corners to detect edge

3. Build to the maximum weight
	- Traction (force used to generate motion through dry friction) and intertia

4. Build compact
	- Larger robot --> More likely opponent will contact a part of your robot far from centre of mass

5. Build low
	- Lower CG

6. Build a skirt or shield
	- Ramp: Lifts your opponent --> Transfer their weight to yours
	- Shield: Surrounds your sumobot --> Works with whatever contact point --> Prevents ramp from lifting you up
	https://www.youtube.com/watch?v=3tguWcKTXQI 
	- Skirt: Detect enemy + Enemy hasn't stolen traction

7. Gear Ratio
	- Small Driver Gear --> Large Driven Gear
		- Slower speed but larger torque

8. Wheel Guard

***Advanced***
1. Locate your prey
	- Turn in place to check
	- Check the sensor to see if it detects something close
		- Calculate maximum distance opponent can be (prevents detecing human): Circumference - Minimum size of opposing robot
		- Detect minimum size of robot
2. Organise your software
	- React > One action at a time
	- Higher priority behaviours (back-away-from-the-edge) interrupt lower priority behaviours (scan-for prey)

**Discussion**
1. Get MPV out
	- Understand which functions/parts are impt --> Know what to use to build
2. Focus on mech eng --> I can get my USP friends to help