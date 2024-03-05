CREATE TABLE `restaurants` (
	`id` binary NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(255),
	`manager_id` binary,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `restaurants_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` binary NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(11),
	`user_roles` enum('manager','customer') NOT NULL DEFAULT 'customer',
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `restaurants` ADD CONSTRAINT `restaurants_manager_id_users_id_fk` FOREIGN KEY (`manager_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action;