const User = require('../models/user.model');
const userDal = require('../dal/user.dal');
const userDto = require('../dto/user.dto');
const helpers = require('../utils/helpers');

const fileService = require('./file.service');

exports.createUser = async (req, res) => {
 try {
  const {username, role, password, email, profile, favorites, watchlist, ratings, friends, settings} = req.body;
  const user = new User({
   username,
   role: 'user',
   password: await helpers.encryptPassword(password),
   email,
   profile,
   favorites,
   watchlist,
   ratings,
   friends,
   settings
  });
  // const findUser = await userDal.findOne(username);
  const json = await userDal.create(user);
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   email: json.email,
   profile: json.profile,
   favorites: json.favorites,
   watchlist: json.watchlist,
   ratings: json.ratings,
   friends: json.friends,
   settings: json.settings
  }
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}


exports.getAllUsers = async (req, res) => {
 try {
  const json = await userDal.getAllUsers(
   {},
   [
    {
     path: 'friends',
     select: 'username'
    },
    {
     path: 'favorites.item',
     select: 'name tags'
    },
    {
     path: 'watchlist.item',
     select: 'name tags'
    },
    {
     path: 'ratings.item',
     select: 'name tags'
    }
   ]
  )
  return json
 } catch (error) {
  throw new Error(error)
 }
}

exports.getAllUSersWithPagination = async (req, res) => {
 try {
  const {perPage, page, sortBy, sortDir} = req.query;
  const json = await userDal.getAllUsersWithPagination(
   {},
   [
    {
     path: 'friends',
     select: 'username'
    },
    {
     path: 'favorites.item',
     select: 'name tags'
    },
    {
     path: 'watchlist.item',
     select: 'name tags'
    },
    {
     path: 'ratings.item',
     select: 'name tags'
    }
   ],
   perPage * page,
   {[sortBy]: sortDir}
  );
  return json
 } catch (error) {
  throw new Error(error)
 }
};


exports.getById = async (req) => {
 try {
  const {id} = req.params;
  const json = await userDal.getById(
   id,
   [
    {
     path: 'friends',
     select: 'username'
    },
    {
     path: 'favorites.item',
     select: 'name tags'
    },
    {
     path: 'watchlist.item',
     select: 'name tags'
    },
    {
     path: 'ratings.item',
     select: 'name tags'
    }
   ]);
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   email: json.email,
   profile: json.profile,
   favorites: json.favorites,
   watchlist: json.watchlist,
   ratings: json.ratings,
   friends: json.friends,
   settings: json.settings,
   role: json.role,
   createdAt: json.createdAt,
   updatedAt: json.updatedAt
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.updateUser = async (req) => {
 try {
  const {id} = req.params;
  const {username, email, profile, favorites, watchlist, ratings, friends, settings} = req.body;
  const json = await userDal.updateUserById(id, {
   username, email, profile, favorites, watchlist, ratings, friends, settings
  })
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   password: json.password,
   email: json.email,
   profile: json.profile,
   favorites: json.favorites,
   watchlist: json.watchlist,
   ratings: json.ratings,
   friends: json.friends,
   settings: json.settings
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.deleteUser = async (req, res) => {
 try {
  const {id} = req.params;
  const findUser = await userDal.getById(id);
  if (findUser.friends.length > 0) {
   await helpers.deleteUserFriendFilter(findUser.friends, userDal, id)
  }
  const json = await userDal.deleteUserById(id);
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   password: json.password,
   email: json.email,
   profile: json.profile,
   favorites: json.favorites,
   watchlist: json.watchlist,
   ratings: json.ratings,
   friends: json.friends,
   settings: json.settings
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.login = async (req, res) => {
 try {
  const {username, email, password} = req.body

  let query;

  if (email) {
   query = {email};
  } else if (username) {
   query = {username};
  } else {
   // Hata durumu veya gerekli parametre eksikliği
   return res.status(400).json({error: 'Email or username is required'});
  }

  const json = await userDal.findOne(query);
  // console.log('user', user);
  // return user;

  if (!!json) {
   const isValid = await helpers.decryptPassword(password, json.password)
   if (isValid) {
    // Doğrulama başarılı

    const token = await helpers.generateToken(json._id, username, json.role)
    // console.log('json', json.role)
    return {
     userId: json._id,
     username,
     role: json.role,
     token,
     avatar: json.profile.profilePicture,
     name: json.profile.name,
     surname: json.profile.surname
    }
   }
  }
  throw new Error('Hatalı Kullanıcı Bilgileri')

 } catch (error) {
  throw new Error(error)
 }
}


exports.register = async (req, res) => {
 try {
  const {username, role, password, email, profile, favorites, watchlist, ratings, friends, settings} = req.body;

  // console.log('req.body', req.body)
  const verifyCode = await helpers.mailVerifyToken();


  const user = new User({
   username,
   role: 'user',
   password: await helpers.encryptPassword(password),
   email,
   profile,
   favorites,
   watchlist,
   ratings,
   friends,
   settings,
   isVerified: false,
   verifyCode: verifyCode
  });
  // const findUser = await userDal.findOne(username);


// Kullanıcı kaydının oluşturulduğu zaman damgası
  const registrationTime = new Date();

// Zaman damgasını hesaplayın
  const timestamp = registrationTime.getTime();
  const json = await userDal.create(user);
  if (!!json) {
   await helpers.sendMail(email, 'Hesap Onayı', verifyCode, json._id, timestamp)
  }
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   email: json.email,
   profile: json.profile,
   favorites: json.favorites,
   watchlist: json.watchlist,
   ratings: json.ratings,
   friends: json.friends,
   settings: json.settings
  }
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}

exports.confirmEmail = async (req, res) => {
 try {
  const {token, user, timestamp} = req.query;

  // Doğrulama linkinin geçerlilik süresi (örneğin, 24 saat)
  const validityPeriod = 24 * 60 * 60 * 1000; // 24 saat * 60 dakika * 60 saniye * 1000 milisaniye

  const currentTime = new Date().getTime();
  if (currentTime - timestamp > validityPeriod) {
   throw new Error('Doğrulama süresi geçti')
  }

  const findUser = await userDal.getById(user);
  if (!findUser) {
   throw new Error('Kullanıcı Bulunamadı')
  }
  if (findUser.verifyCode !== token) {
   throw new Error('Doğrulama kodu hatalı')

  }
  if (findUser.isVerified) {
   throw new Error("Kullanıcı zaten doğrulanmış")
  }
  const json = await userDal.updateUserById(user, {isVerified: true})
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   email: json.email,
   profile: json.profile,
   favorites: json.favorites,
   watchlist: json.watchlist,
   ratings: json.ratings,
   friends: json.friends,
   settings: json.settings
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.uploadProfilePicture = async (req, res) => {
 try {
  const {id} = req.params;
  const findUser = await userDal.getById(id);
  if (!findUser) {
   throw new Error('Kullanıcı Bulunamadı')
  }

  const str = await fileService.uploadSingleImage(req, res);
  const json = await userDal.updateUserById(id, {profile: {...findUser.profile, profilePicture: str}})
  return {
   ...userDto,
   id: json._id,
   username: json.username,
   profile: {profilePicture: json.profile.profilePicture = str},
  }
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}


exports.updateProfilePicture = async (req, res) => {
 try {
  const {id} = req.params;
  const findUser = await userDal.getById(id);
  const str = await fileService.uploadSingleImage(req, res);
  const isDeletedPP = await helpers.deleteImageFromDisk(findUser.profile.profilePicture ? findUser.profile.profilePicture.split('/uploads/')[1] : '');
  if (!isDeletedPP) {
   const json = await userDal.updateUserById(id, {profile: {...findUser.profile, profilePicture: str}})
   return {
    ...userDto,
    id: json._id,
    username: json.username,
    profile: {profilePicture: json.profile.profilePicture = str},
   }
  }
  throw new Error('Something went wrong, pp update failed')
 } catch (error) {
  throw new Error(error)
 }
}


exports.addFriend = async (req, res) => {
 try {
  const {id} = req.params;
  const {friendId} = req.body;

  const friendUser = await userDal.getById(id)
  const findFriend = await userDal.getById(friendId)

  const addfriendOne = await userDal.updateUserById(id, {...friendUser.friends, friends: friendId})
  const addfriendTwo = await userDal.updateUserById(friendId, {...findFriend.friends, friends: id})

  return {
   addfriendOne,
   addfriendTwo
  }

 } catch (error) {
  throw new Error(error)
 }
}


exports.findByEmail = async (email) => {
 try {
  const json = await userDal.findOne({email})
  return json;
 } catch (error) {
  throw new Error(error)
 }
}


exports.findByUserName = async (username) => {
 try {
  const json = await userDal.findOne({username})
  return json;
 } catch (error) {
  throw new Error(error)
 }
}
