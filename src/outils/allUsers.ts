import { ObjectId } from 'mongoose';
import type { IUsers } from '../allSchema/userSchema'

async function allUsers(users : IUsers[]) {

  const ret = users.map(user =>{
    const {_id , username, email} = user;
    return {_id, username, email};
  })
  return ret;
}

export default allUsers