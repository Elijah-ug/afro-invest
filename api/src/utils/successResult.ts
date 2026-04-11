export const successResult = (res: any, data: any, message: any) => {
  return res.status(200).json({
    success: true,
    message,
    data
  });
};
