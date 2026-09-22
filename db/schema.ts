import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';
export const articles = sqliteTable('articles',{id:text('id').primaryKey(),payload:text('payload').notNull(),score:integer('score').notNull().default(0),updated:integer('updated').notNull()},t=>[index('idx_articles_score_updated').on(t.score,t.updated)]);
export const activity = sqliteTable('activity',{owner:text('owner').notNull(),kind:text('kind').notNull(),item:text('item').notNull(),created:integer('created').notNull()},t=>[primaryKey({columns:[t.owner,t.kind,t.item]})]);
export const state = sqliteTable('state',{key:text('key').primaryKey(),value:text('value').notNull(),updated:integer('updated').notNull()});
