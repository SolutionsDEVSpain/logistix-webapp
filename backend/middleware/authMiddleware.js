const admin = require('../config/firebaseAdmin');
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No se proporcionó un token válido' });
    }
  
    const token = authHeader.split(' ')[1]; 
  
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken; 
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido o expirado' });
    }
  };
module.exports = authMiddleware;
