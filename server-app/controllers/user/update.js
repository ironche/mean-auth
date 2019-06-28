import { User } from '../../models/user';

export default async function(req, res) {
  try {
    const { username } = req.user;
    const user = await User.findOne({ username }).exec();

    const { displayName, fullName, phone, group } = req.body;
    user.displayName = displayName;
    user.fullName = fullName;
    user.phone = phone;
    user.group = group;

    await user.save();
    user.maskPassword();

    return res.json(user);

  } catch (error) {
    return res.status(500).json({ error });
  }
}
