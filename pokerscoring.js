var cell=require('cells'); //requires node.js to be installed
var func=function(k[c][r],n){ //Give computer the starting cell and the "n" value.
	var count=cell.COUNT(k[1][7],cell.ENDNUM()); //count from cell 1,7 to the last number
	for(i=1; i<=count; i++) 
	{
		var geoMean*=k[i][r]; //Multiply the geoMean by the next number in the cell.
	};
	geoMean=geoMean/count; //Divide geoMean by the constant count, i.e. # of games.
	while(!k[r][c].iNaN) //As long as starting cell is NOT "not a number", i.e. IS a number
	{
	var cashCount=cell.COUNT(k[1][r],cell.ENDNUM()); //count the cell.
	};
	var score=geoMean*cashCount;
	var score*=(math.Power(k[9][r],(1/n))); //Multiply score by the number in column I, starting row, i.e. total.
	return score;
};
func(cell.Get());