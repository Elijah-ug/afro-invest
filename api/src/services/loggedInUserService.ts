import { prisma } from '../../lib/prisma';

export const loggedInUserService=async(data:any)=>{
    const {id} = data;

    if (!id) {
      throw new Error('Unauthorized: No user ID found')
    }
    // Fetch user from database
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if(!user){
        throw new Error('User not found')
    }
}