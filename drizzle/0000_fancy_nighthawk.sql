CREATE TABLE `users` (
	`id` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`user_roles` enum('manager','customer') NOT NULL DEFAULT 'customer',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
