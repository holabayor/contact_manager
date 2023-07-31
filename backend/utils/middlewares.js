import jwt from 'jsonwebtoken';

const isLoggedIn = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split(' ')[1];

  if (accessToken == null)
    return res.status(401).send({ error: 'No token provided' });

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) return res.status(403).send({ error: err.message });
    const { id } = payload;
    req.userId = id;
    next();
  });
};

const refreshAccessToken = (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (refreshToken === null) {
    return res.status(401).json({ error: 'No token provided' });
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send({ error: 'Invalid token' });

    // Generate a new access token
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 1200,
      }
    );
    req.id = user.id;
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    return res.status(200).json({ message: 'Token refreshed' });
  });
};

const checkAccessTokenExpiry = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split(' ')[1];

  if (accessToken) {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (!err && payload) {
        const currentTimestamp = Math.round(new Date().getTime() / 1000);
        const { exp } = jwt.decode(accessToken);
        if (exp - currentTimestamp < 300) {
          return next();
        }
      }

      const { refreshToken } = req.cookies;

      if (refreshToken === null) {
        return res.status(401).json({ error: 'No token provided' });
      }
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err) {
            return res.status(403).send({ error: 'Invalid refresh token' });
          }
          // Generate a new access token
          const newAccessToken = jwt.sign(
            { id: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: 1200,
            }
          );
          res.setHeader('Authorization', `Bearer ${newAccessToken}`);
          next();
        }
      );
    });
  } else {
    return res.status(401).send({ error: 'No token provided' });
  }
};

export { isLoggedIn, refreshAccessToken, checkAccessTokenExpiry };
