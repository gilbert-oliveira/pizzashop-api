ALTER TABLE `restaurans` DROP FOREIGN KEY `restaurans_manager_id_users_id_fk`;
--> statement-breakpoint
ALTER TABLE `restaurans` ADD CONSTRAINT `restaurans_manager_id_users_id_fk` FOREIGN KEY (`manager_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action;