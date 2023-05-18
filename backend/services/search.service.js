const searchDal = require('../dal/search.dal');

exports.search = async (req) => {
 try {
  const {search} = req.query;
  console.log('search',search)
  const results = await searchDal.searchData(search);
  console.log('scores',results)
  return results

 } catch (error) {
  console.log('error',error)
  throw new Error(error)
 }
}


