const searchDal = require('../dal/search.dal');

exports.search = async (req) => {
 try {
  const {search} = req.query;

  const results = await searchDal.searchData(search);

  return results

 } catch (error) {
  console.log('error',error)
  throw new Error(error)
 }
}


