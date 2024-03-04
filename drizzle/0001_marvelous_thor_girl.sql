CREATE TABLE `restaurans` (
	`id` text NOT NULL,
	`email` text NOT NULL,
	`description` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `restaurans_id` PRIMARY KEY(`id`),
	CONSTRAINT `restaurans_email_unique` UNIQUE(`email`)
);
