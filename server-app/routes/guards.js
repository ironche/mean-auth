export function loginGuard(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      message: 'Unauthorized user'
    });
  }
  next();
};
