"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

const signUp = async (params: AuthCredentials) => {
    const { fullName, email, password, universityId, universityCard } = params;

    const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

        if(existingUser.length > 0) {
            return {success: false, message: "User already exists"};
        }
        const hashedPassword = await hash(password, 10);

        try {
            await db.insert(users).values({
                fullName,
                email,
                password: hashedPassword,
                universityId,
                universityCard
            })

        } catch (error) {
            console.log(error, "Signup error");
            return { success: false, message: "Signup error" };
        }
};