import { mysqlTable, int, text, bigint } from "drizzle-orm/mysql-core";

export const schools = mysqlTable("schools", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  contact: text("contact"),  
  image: text("image"),
  email_id: text("email_id"),
});
