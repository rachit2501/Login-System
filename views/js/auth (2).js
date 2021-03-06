const bcrypt = require('bcrypt');

async function salt(req)
{
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(req, salt);
	return hash;
} 

module.exports.auth = function auth(req)
{
	return salt(req);
}


async function comp(req , correct)
	{
		const a=await bcrypt.compare(req.body.password , correct.password);
		if(a) return true;
		else return false;
	}

module.exports.compare = function compare(req , correct)
{
	console.log("compoareing");
	return comp(req , correct);
}