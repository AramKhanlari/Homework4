//Triangle Stars
const triangleStars = function(height) 
	{
	if(height <= 0)
	{return '';}
	const stars = function(Spacesnum , Starsnum)
		{
		if(Starsnum <= 0)
			{return '';}
		const printSpaces = function(Spacesnum)
			{
			if(Spacesnum <= 0)
				{return '';}
			return " " + printSpaces(Spacesnum - 1);
			};
		const printStars = function(Starsnum)
			{
			if(Starsnum <= 0) 
				{return '';}
			return "*" + printStars(Starsnum - 1);
			};
		console.log(printSpaces(Spacesnum) + printStars(Starsnum));
		stars(Spacesnum + 1, Starsnum - 2);
		};
	(stars(0 , 2 *  height - 1));
	}

//POW

const pow = function(base, num) 
	{
		if (base < 1 || num < 1) 
			{
				return;
			}
		if (num === 1) 
			{
				return base;
			}
		return base * pow(base, num-1);
	};

//Reverse

const reverse = function (str)
{
	const length = str.length;
	const myReverse = function (str , num)
		{
		if (num <= 0)
			{return '';}
		return str[num -1] + myReverse(str ,num - 1);
		}
	return myReverse(str, length);
}

//CheckerBoard

const stars = function (numStars)
	{
	if (numStars <= 0) 
		{return ''}
	return "* " + stars(numStars - 1);
	};

const spaces = function(numSpaces)
	{
	if (numSpaces <= 0) 
		{return ''}
	return " *" + spaces(numSpaces - 1);
	};

const checkb = function(num, height)
	{
	if (height <= 0) 
		{return ''}
	console.log(stars(num));
	console.log(spaces(num));
	return checkb(num, height - 1);
	};

const checkerboard = function(size)
	{
	if (size % 2 === 0) 
		{
		return checkb(size , size / 2);
		}
	else 
		{
		return checkb(size , (size - 1)/ 2) + stars(size);
		}
	};