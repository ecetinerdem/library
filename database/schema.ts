
import { uuid, varchar, integer, text, boolean, pgTable, pgEnum, date, timestamp } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", ["PENDING", "APPROVED", "REJECTED"]);
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", ["BORROWED", "RETURNED"]);




export const users = pgTable("users", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    fullname: varchar("full_name", { length: 255 }).notNull(),
    email: text("email").notNull().unique(),
    universityId: integer("university_id").notNull().unique(),
    password: varchar("password").notNull(),
    universityCard: text("university_card").notNull(),
    status: STATUS_ENUM("status").default("PENDING"),
    role: ROLE_ENUM("role").default("USER"),
    lastActivityDate: date("last_activity_date").defaultNow().notNull(),
    createdAt: timestamp("created_at", {
        withTimezone: true,
    }).defaultNow(),
});