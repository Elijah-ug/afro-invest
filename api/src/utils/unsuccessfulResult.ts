export const unsuccessfulResult = (res: any, error: any, message: any) => {
  return res.status(500).json({
    success: false,
    message,
    error,
  });
};
