import config from '../../config';

export default function(req, res) {
  try {
    return res
      .clearCookie(config.jwtCookie)
      .json({
        message: 'ok'
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
