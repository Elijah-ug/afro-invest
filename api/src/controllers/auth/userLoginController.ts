import { Request, Response } from 'express';
import { loginService } from '../../services/loginService';
import { successResult } from '../../utils/successResult';

export const userLoginController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await loginService(data);

    // Set HTTP-only cookies
    // process.env.NODE_ENV === 'production'
    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true, 
      secure: isProduction,
      sameSite: isProduction? 'none':  'lax',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction? 'none':  'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // pass safe user properties
    return successResult(res, { result }, 'Login successful');
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || 'Login failed',
    });
  }
};
