CREATE TABLE `activity` (
	`owner` text NOT NULL,
	`kind` text NOT NULL,
	`item` text NOT NULL,
	`created` integer NOT NULL,
	PRIMARY KEY(`owner`, `kind`, `item`)
);
--> statement-breakpoint
CREATE TABLE `articles` (
	`id` text PRIMARY KEY NOT NULL,
	`payload` text NOT NULL,
	`score` integer DEFAULT 0 NOT NULL,
	`updated` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_articles_score_updated` ON `articles` (`score`,`updated`);--> statement-breakpoint
CREATE TABLE `state` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`updated` integer NOT NULL
);
