import { Request, Response } from 'express';
import { loginService } from '../../services/loginService';

export const userLoginController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await loginService(data);

    // Set HTTP-only cookies
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // pass safe user properties
    const { password, ...secureUser } = result.user;
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: secureUser,
      },
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || 'Login failed',
    });
  }
};
