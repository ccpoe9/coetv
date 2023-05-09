const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function generatePreSignUrl( source ) {
  const {
    stdout,
    stderr
  } = await exec(`aws s3 presign s3://'${source}' --endpoint-url https://s3.wasabisys.com`);
  if(stderr){
    console.error('stderr:', stderr);
    return '';
  }
  else{
    return stdout;
  }
}


exports.GetMovieSource = async (req,res) => {
    let url = await generatePreSignUrl(req.query.source);
    res.send({url});
	console.log(url);
}
