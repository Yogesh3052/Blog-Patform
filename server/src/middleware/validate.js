const validatePost = (req, res, next) => {
  const { title, content } = req.body;
  
  if (!title || title.length < 50) {
    return res.status(400).json({ message: 'Title must be at least 3 characters long' });
  }
  
  if (!content || content.length < 400) {
    return res.status(400).json({ message: 'Content must be at least 10 characters long' });
  }
  
  next();
};

const validateUser = (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || username.length < 3) {
    return res.status(400).json({ message: 'Username must be at least 3 characters long' });
  }
  
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }
  
  next();
};

module.exports = { validatePost, validateUser }; 