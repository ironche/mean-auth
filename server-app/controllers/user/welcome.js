import { User } from '../../models/user';

export default async function(req, res) {
  try {
    const { username } = req.user;
    const user = await User.findOne({ username }).exec();
    user.maskPassword();

    return res.json(user);

  } catch (error) {
    return res.status(500).json({ error });
  }
}
