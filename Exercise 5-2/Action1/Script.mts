const minAccScore = 9.0 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image id2200")_;_script infofile_;_ZIP::ssf2.xml_;_

Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=2200").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_

If Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=2200").Exist Then
	wait 2
	Browser("Advantage Shopping").Page("Advantage Shopping").Image("fetchImage?image_id=2200").Click	
End If

score = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innertext")
score = cdbl(score)

If score >= minAccScore Then
	Reporter.ReportEvent micPass, "Checkpoint Score Passed", "Hey this is cool!  The score was " & score
Else 
	Reporter.ReportEvent micFail, "Checkpoint Score Failed", "Uh-oh this is rubbish!"
End If

Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf3.xml_;_
