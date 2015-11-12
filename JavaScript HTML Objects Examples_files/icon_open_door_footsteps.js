/**********************************
* Icon Animation .JS Fragment File
***********************************/
var iconAnimationName = "open_door_footsteps";
var iconAnimationVersion = 2.1;
var spriteSheetName = "spritesheet_open_door_footsteps.png";
var spriteSheet = new Image();

// For rescaling on other unit sizes
var iconUnitScale = 1.; // Scale = 1 for 300x250
var iconRegistrationX = 0; // Null registration point of animation. Adjust as needed on other unit sizes (728x90, 160x600)
var iconRegistrationY = 0; // 0, 0 is based on the 300x250

// From Dynamic API
var iconAnimationStartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed__US_Sheet1[0].Start_Time_Icon_Animation); //Start_Time_Icon_Animation
var copyBatch2StartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed__US_Sheet1[0].Start_Time_Text_2); //Start_Time_Icon_Animation

var objPart = [];
var objPartCount = 5;
var objPartStartX = [487, 477, 525, 505, 587,];
var objPartStartY = [10, 50, 20, 70, 30];
var objPartDockX = [512, 512, 512, 532, 537];
var objPartDockY = [45, 7, 7, 6, 44];

var square = [];
var squareCount = 4;
var squaretartX = [469, 484, 497, 513];
var squaretartY = [68, 57, 68, 57];
var squareDockX = [469, 484, 497, 513];
var squareDockY = [78, 67, 78, 67];

function createIconParts()
{
	var i = 0;
	var tempElement;
	var iconHolder = $("#iconHolder");
	// Create Phone Icon Parts & attach to DOM

	for (i = 0; i < objPartCount; i++)
	{
		tempElement =  document.createElement("div");
		tempElement.setAttribute("id", "part" + i);
		tempElement.setAttribute("class", "sprite part" + i);
		iconHolder.appendChild(tempElement);
		objPart[i] = $("#part" + i);
		TweenLite.to(objPart[i], 0, {opacity:0, x:(objPartStartX[i] * iconUnitScale + iconRegistrationX), y:(objPartStartY[i] * iconUnitScale + iconRegistrationY)});
	}


	for (i = 0; i < squareCount; i++)
	{
		tempElement =  document.createElement("div");
		tempElement.setAttribute("id", "step" + i);
		tempElement.setAttribute("class", "sprite step" + i);
		iconHolder.appendChild(tempElement);
		square[i] = $("#step" + i);
		TweenLite.to(square[i], 0, {opacity:0, x:(squaretartX[i] * iconUnitScale + iconRegistrationX), y:(squaretartY[i] * iconUnitScale + iconRegistrationY)});
	}

}

function initIconAnimations()
{
	// Timeline Markers Definitions
	tlIcon.addLabel("dockPhone", iconAnimationStartTime);
	tlIcon.addLabel("step0", copyBatch2StartTime + 1);
	tlIcon.addLabel("step0-hide", copyBatch2StartTime + 1.5);
	tlIcon.addLabel("step1", copyBatch2StartTime + 1.5);
	tlIcon.addLabel("step1-hide", copyBatch2StartTime + 2);
	tlIcon.addLabel("step2", copyBatch2StartTime + 2);
	tlIcon.addLabel("step2-hide", copyBatch2StartTime + 2.5);
	tlIcon.addLabel("step3", copyBatch2StartTime + 2.5);

	// Animation Definitions
	dockPhone();
	step0();
	step1();
	step2();
	step3();

	tlIcon.to([$("#arrowCont")], 1, {y:-19, ease:Power3.easeInOut}, "moveUp");

	// End Animation
}

function dockPhone()
{
	var i = 0;
	for (i = 0; i < objPartCount; i ++)
	{
		tlIcon.to(objPart[i], 0.3, {opacity:1}, "dockPhone");
		tlIcon.to(objPart[i], 1, {x:(objPartDockX[i] * iconUnitScale + iconRegistrationX), y:(objPartDockY[i] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "dockPhone");
	}
}

function step0() 
{
	tlIcon.to(square[0], 0.3, {opacity:1}, "step0");
	tlIcon.to(square[0], 1, {x:(squareDockX[0] * iconUnitScale + iconRegistrationX), y:(squareDockY[0] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "step0");
	tlIcon.to(square[0], 0.3, {opacity:0}, "step0-hide");
}

function step1() 
{
	tlIcon.to(square[1], 0.3, {opacity:1}, "step1");
	tlIcon.to(square[1], 1, {x:(squareDockX[1] * iconUnitScale + iconRegistrationX), y:(squareDockY[1] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "step1");
	tlIcon.to(square[1], 0.3, {opacity:0}, "step1-hide");
}

function step2() 
{
	tlIcon.to(square[2], 0.3, {opacity:1}, "step2");
	tlIcon.to(square[2], 1, {x:(squareDockX[2] * iconUnitScale + iconRegistrationX), y:(squareDockY[2] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "step2");
	tlIcon.to(square[2], 0.3, {opacity:0}, "step2-hide");
}

function step3() 
{
	tlIcon.to(square[3], 0.3, {opacity:1}, "step3");
	tlIcon.to(square[3], 1, {x:(squareDockX[3] * iconUnitScale + iconRegistrationX), y:(squareDockY[3] * iconUnitScale + iconRegistrationY), ease:Power4.easeInOut}, "step3");
}

// Create and initialize icon parts + animation
createIconParts();
initIconAnimations();

console.log("Animation: " + iconAnimationName + " ver " + iconAnimationVersion);
console.log("-----");

// play animation once spritesheet is confirmed to have loaded
function onSpriteSheetLoad(e)
{
	// startAnimations is called from main.js
	// it will play the main timeline (tl)
	// + your icon timeline (tlIcon) at the same time
	startAnimations(); // STARTS THE ENTIRE UNIT ANIMATION when SpriteSheet is loaded
}

spriteSheet.addEventListener("load", onSpriteSheetLoad, false);
spriteSheet.src = spriteSheetName;
