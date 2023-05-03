const User = require('../models/user.model');
const userDal = require('../dal/user.dal');
const userDto = require('../dto/user.dto');
const helpers = require('../utils/helpers');

const fileService = require('./file.service');

exports.createUser = async (req, res) => {
 try {
  const {username,role, password, email, profile, favorites, watchlist, ratings, friends, settings} = req.body;
  const user = new User({
   username,
   role,
   password: await helpers.encryptPassword(password),
   email,
   profile,
   favorites,
   watchlist,
   ratings,
   friends,
   settings
  });
  const json = await userDal.create(user);
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

  await helpers.deleteUserFriendFilter(findUser.friends, userDal, id)
  console.log('userFriends', findUser.friends)
  return
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
  const {username, password} = req.body

  const json = await userDal.findOne({username})

  if (!!json) {
   const isValid = await helpers.decryptPassword(password, json.password)
   if (isValid) {
    // Doğrulama başarılı

    const token = await helpers.generateToken(json._id, username, json.role)
    return {userId:json._id, username, role:json.role,token}
   }
  }
  console.log('Hatalı Kullanıcı Adı')
  throw new Error('Hatalı Kullanıcı Bilgileri')

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
