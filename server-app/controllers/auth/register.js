import { User } from '../../models/user';

export default async function(req, res) {
  try {
    const { username, password } = req.body;

    if (username && password) {
      const userExists = await User.findOne({ username }).exec();

      if (!userExists) {
        const user = new User({ username, password });
        user.hashPassword();

        await user.save();
        user.maskPassword();

        return res.json(user);
      }

      return res.status(409).json({
        message: 'User already exists'
      });
    }
    return res.status(400).json({
      message: 'Missing parameters'
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
