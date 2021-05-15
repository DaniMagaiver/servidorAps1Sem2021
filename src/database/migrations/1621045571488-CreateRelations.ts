import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelations1621045571488 implements MigrationInterface {
    name = 'CreateRelations1621045571488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `talks_users_users` (`talksId` varchar(36) NOT NULL, `usersId` varchar(36) NOT NULL, INDEX `IDX_f7882241aebc8f358490626a55` (`talksId`), INDEX `IDX_9a952b7c55cf774114ca288b35` (`usersId`), PRIMARY KEY (`talksId`, `usersId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `messages` ADD `userId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `messages` ADD `talkId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `messages` ADD CONSTRAINT `FK_4838cd4fc48a6ff2d4aa01aa646` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `messages` ADD CONSTRAINT `FK_bcdce2f65bb3c0dd150c46ec4a3` FOREIGN KEY (`talkId`) REFERENCES `talks`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `talks_users_users` ADD CONSTRAINT `FK_f7882241aebc8f358490626a55a` FOREIGN KEY (`talksId`) REFERENCES `talks`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `talks_users_users` ADD CONSTRAINT `FK_9a952b7c55cf774114ca288b35f` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `talks_users_users` DROP FOREIGN KEY `FK_9a952b7c55cf774114ca288b35f`");
        await queryRunner.query("ALTER TABLE `talks_users_users` DROP FOREIGN KEY `FK_f7882241aebc8f358490626a55a`");
        await queryRunner.query("ALTER TABLE `messages` DROP FOREIGN KEY `FK_bcdce2f65bb3c0dd150c46ec4a3`");
        await queryRunner.query("ALTER TABLE `messages` DROP FOREIGN KEY `FK_4838cd4fc48a6ff2d4aa01aa646`");
        await queryRunner.query("ALTER TABLE `messages` DROP COLUMN `talkId`");
        await queryRunner.query("ALTER TABLE `messages` DROP COLUMN `userId`");
        await queryRunner.query("DROP INDEX `IDX_9a952b7c55cf774114ca288b35` ON `talks_users_users`");
        await queryRunner.query("DROP INDEX `IDX_f7882241aebc8f358490626a55` ON `talks_users_users`");
        await queryRunner.query("DROP TABLE `talks_users_users`");
    }

}
